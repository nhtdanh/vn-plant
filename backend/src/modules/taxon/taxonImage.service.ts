import { prisma } from "../../config/prisma.js";
import { uploadToR2, deleteFromR2, processImage, deleteMultipleFromR2 } from "../upload/upload.service.js";
import { ApiError } from "../../utils/apiError.js";
import { R2_PUBLIC_DOMAIN } from "../../config/s3.config.js";
import type { ImageStatus } from "../../../generated/prisma/index.js";
import { formatPaginatedResponse } from "../../utils/pagination.js";
import type { PaginationParams } from "../../utils/pagination.js";
import { recalculatePrimaryImageUrl } from "./taxon.utils.js";

interface ContributeImageData {
  taxonId: number;
  fileBuffer: Buffer;
  fileName: string;
  contentType: string;
  contributorId: string;
  caption?: string | undefined;
  author?: string | undefined;
  license?: string | undefined;
}

// Đóng góp ảnh cho một loài thực vật (Trạng thái PENDING)
export async function contributeImage(data: ContributeImageData) {
  // 1. Tối ưu hóa ảnh (Convert WebP, Resize)
  const processed = await processImage(data.fileBuffer);

  // 2. Upload lên R2 (Ép kiểu .webp)
  const webpFileName = data.fileName.replace(/\.[^/.]+$/, "") + ".webp";
  const uploadResult = await uploadToR2(
    processed.buffer,
    webpFileName,
    "taxa/contributions",
    "image/webp"
  );

  const url = `${R2_PUBLIC_DOMAIN}/${uploadResult.key}`;

  // 3. Thực hiện lưu vào DB trong Transaction
   return prisma.$transaction(async (tx) => {
     // 3.1 Tính toán sortOrder tiếp theo (max + 1)
     const lastImage = await tx.taxonImage.findFirst({
       where: { taxonId: data.taxonId },
       orderBy: { sortOrder: 'desc' },
       select: { sortOrder: true },
     });
     const nextSortOrder = (lastImage?.sortOrder ?? 0) + 1;
 
     // 3.2 Kiểm tra xem Taxon đã có ảnh approved nào chưa
     const approvedCount = await tx.taxonImage.count({
       where: { taxonId: data.taxonId, status: "approved" }
     });
     const isFirstApproved = approvedCount === 0;
 
     // 3.3 Tạo bản ghi ảnh
     const newImage = await tx.taxonImage.create({
       data: {
         taxonId: data.taxonId,
         url,
         storageKey: uploadResult.key,
         width: processed.width,
         height: processed.height,
         ...(data.caption !== undefined && { caption: data.caption }),
         ...(data.author !== undefined && { author: data.author }),
         ...(data.license !== undefined && { license: data.license }),
         status: "pending",
         isPrimary: isFirstApproved,
         sortOrder: nextSortOrder,
         contributorId: data.contributorId,
       },
     });
 
     // 3.4 Nếu là ảnh đầu tiên -> Cập nhật primaryImageUrl cho Taxon
     if (isFirstApproved) {
       await tx.taxon.update({
         where: { id: data.taxonId },
         data: { primaryImageUrl: url }
       });
     }
 
     return newImage;
   });
 }

// Lấy danh sách ảnh phê duyệt (Chỉ Admin)
export async function getPendingImages(pagination: PaginationParams, status?: ImageStatus) {
  const where = { 
    ...(status ? { status: status as ImageStatus } : { status: { in: ['pending', 'approved', 'rejected'] as ImageStatus[] } }),
    contributorId: { not: null } // Chỉ lấy ảnh do người dùng đóng góp
  };

  const [total, items] = await Promise.all([
    prisma.taxonImage.count({ where }),
    prisma.taxonImage.findMany({
      where,
      include: {
        taxon: {
          select: { scientificName: true, vietnameseName: true, slug: true }
        },
        contributor: {
          select: { displayName: true, email: true, avatarUrl: true }
        }
      },
      orderBy: { createdAt: "desc" },
      ...pagination,
    }),
  ]);

  return formatPaginatedResponse(items, total, pagination);
}

// Phê duyệt hoặc từ chối ảnh (Chỉ Admin)
export async function reviewImage(
  id: number,
  reviewerId: string,
  data: { status: ImageStatus; recordNote?: string | undefined; isPrimary?: boolean | undefined; sortOrder?: number | undefined }
) {
  const image = await prisma.taxonImage.findUnique({
    where: { id },
    include: { taxon: true }
  });

  if (!image) {
    throw ApiError.notFound("Không tìm thấy ảnh này");
  }

  // Cập nhật bản ghi ảnh
   const updatedImage = await prisma.$transaction(async (tx) => {
     // 1. Kiểm tra xem Taxon này đã có ảnh nào được duyệt chưa (trước khi duyệt ảnh này)
     let effectivelyPrimary = data.isPrimary;
 
     if (data.status === "approved" && effectivelyPrimary === undefined) {
        const approvedCount = await tx.taxonImage.count({
          where: { taxonId: image.taxonId, status: "approved", id: { not: id } }
        });
        // Nếu chưa có ảnh nào -> Mặc định gán làm ảnh chính
        if (approvedCount === 0) {
          effectivelyPrimary = true;
        }
     }
 
     const img = await tx.taxonImage.update({
       where: { id },
       data: {
         status: data.status,
         ...(data.recordNote !== undefined && { recordNote: data.recordNote }),
         isPrimary: data.status === "approved" ? (effectivelyPrimary ?? image.isPrimary) : false,
         sortOrder: data.sortOrder ?? image.sortOrder,
         reviewedBy: reviewerId,
         reviewedAt: new Date(),
       },
     });
 
     // Nếu ảnh này được gán làm ảnh chính -> Reset các ảnh khác
     if (img.isPrimary && img.status === "approved") {
       await tx.taxonImage.updateMany({
         where: { taxonId: image.taxonId, id: { not: id } },
         data: { isPrimary: false }
       });
     }
 
     // Luôn tính toán lại ảnh chính cho Taxon để đảm bảo đồng bộ (đặc biệt khi Reject ảnh đang làm Primary)
     await recalculatePrimaryImageUrl(tx, image.taxonId);
 
     return img;
   });

  return updatedImage;
}

// Tìm và xóa toàn bộ ảnh vật lý trên R2 thuộc về một Taxon (Dùng khi xóa Taxon)
export async function deletePhysicalImagesByTaxonId(taxonId: number) {
  const images = await prisma.taxonImage.findMany({
    where: { taxonId },
    select: { storageKey: true }
  });

  const keys = images
    .map(img => img.storageKey)
    .filter((key): key is string => !!key);

  if (keys.length > 0) {
    console.log(`[Lifecycle] Cleaning up ${keys.length} images from R2 for Taxon ${taxonId}...`);
    await deleteMultipleFromR2(keys).catch(e => 
      console.error(`[Lifecycle] Failed to batch delete images for Taxon ${taxonId}:`, e)
    );
  }
}

// Thả tim hoặc gỡ tim cho ảnh
export async function toggleLike(userId: string, imageId: number) {
  // 1. Kiểm tra sự tồn tại của ảnh và người đóng góp (Chỉ cho phép tim ảnh của người dùng)
  const image = await prisma.taxonImage.findUnique({
    where: { id: imageId },
    select: { contributorId: true }
  });

  if (!image) throw ApiError.notFound("Không tìm thấy ảnh");
  if (!image.contributorId) {
    throw ApiError.forbidden("Chỉ có thể thả tim cho ảnh do người dùng đóng góp");
  }

  // 2. Kiểm tra xem đã like chưa
  const existingLike = await prisma.taxonImageLike.findUnique({
    where: {
      userId_imageId: { userId, imageId }
    }
  });

  if (existingLike) {
    // Nếu đã like -> Xóa like
    await prisma.taxonImageLike.delete({
      where: { id: existingLike.id }
    });
    return { liked: false };
  } else {
    // Nếu chưa like -> Thêm like
    await prisma.taxonImageLike.create({
      data: { userId, imageId }
    });
    return { liked: true };
  }
}

// Thống kê thành tích đóng góp của một User
export async function getUserContributionStats(userId: string) {
  const [pending, approved, rejected, totalLikes] = await Promise.all([
    prisma.taxonImage.count({ where: { contributorId: userId, status: "pending" } }),
    prisma.taxonImage.count({ where: { contributorId: userId, status: "approved" } }),
    prisma.taxonImage.count({ where: { contributorId: userId, status: "rejected" } }),
    prisma.taxonImageLike.count({
      where: {
        image: { contributorId: userId }
      }
    }),
  ]);

  return {
    pending,
    approved,
    rejected,
    totalLikes
  };
}

// Thống kê ảnh đóng góp (Admin)
export async function countStats() {
  const [total, pending, contributed] = await Promise.all([
    prisma.taxonImage.count(),
    prisma.taxonImage.count({ where: { status: "pending" } }),
    prisma.taxonImage.count({ where: { contributorId: { not: null } } }),
  ]);
  return { total, pending, contributed };
}

// Lấy danh sách đóng góp của một người dùng cụ thể
export async function findByContributor(contributorId: string, pagination: PaginationParams) {
  const where = { contributorId };

  const [total, items] = await Promise.all([
    prisma.taxonImage.count({ where }),
    prisma.taxonImage.findMany({
      where,
      include: {
        taxon: {
          select: {
            scientificName: true,
            canonicalName: true,
            vietnameseName: true,
            slug: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
      ...pagination,
    }),
  ]);

  return formatPaginatedResponse(items, total, pagination);
}

// Xóa một tấm ảnh (Chỉ Admin - Standalone)
export async function deleteImage(id: number) {
  const image = await prisma.taxonImage.findUnique({
    where: { id },
    include: { taxon: true }
  });

  if (!image) {
    throw ApiError.notFound("Không tìm thấy ảnh để xóa");
  }

  // 1. Thực hiện trong Transaction để đảm bảo tính nhất quán
  await prisma.$transaction(async (tx) => {
    // Xóa trong DB
    await tx.taxonImage.delete({ where: { id } });

    // 2. Nếu là ảnh chính của Taxon -> Tính toán và tìm ảnh thay thế tốt nhất
    if (image.taxon.primaryImageUrl === image.url) {
      await recalculatePrimaryImageUrl(tx, image.taxonId);
    }
  });

  // 3. Xóa vật lý trên R2 (Async)
  if (image.storageKey) {
    await deleteFromR2(image.storageKey).catch(e => 
      console.error(`[Cleanup] Failed to delete image ${id} from R2:`, e)
    );
  }

  return { id, deleted: true };
}


