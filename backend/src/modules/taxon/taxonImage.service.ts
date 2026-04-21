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

// đóng góp ảnh cho một loài thực vật (trạng thái pending)
export async function contributeImage(data: ContributeImageData) {
  // 1. tối ưu hóa ảnh (convert webp, resize)
  const processed = await processImage(data.fileBuffer);

  // 2. upload lên r2 (ép kiểu .webp)
  const webpFileName = data.fileName.replace(/\.[^/.]+$/, "") + ".webp";
  const uploadResult = await uploadToR2(
    processed.buffer,
    webpFileName,
    "taxa/contributions",
    "image/webp"
  );

  const url = `${R2_PUBLIC_DOMAIN}/${uploadResult.key}`;

  // 3. thực hiện lưu vào db trong transaction
   return prisma.$transaction(async (tx) => {
     // 3.1 tính toán sortOrder tiếp theo (max + 1)
     const lastImage = await tx.taxonImage.findFirst({
       where: { taxonId: data.taxonId },
       orderBy: { sortOrder: 'desc' },
       select: { sortOrder: true },
     });
     const nextSortOrder = (lastImage?.sortOrder ?? 0) + 1;
 
     // 3.2 tạo bản ghi ảnh với trạng thái pending
     // isPrimary và primaryImageUrl chỉ được cập nhật sau khi admin phê duyệt
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
         isPrimary: false, // luôn false khi pending - chỉ được đặt khi approved
         sortOrder: nextSortOrder,
         contributorId: data.contributorId,
       },
     });
 
     return newImage;
   });
 }

// lấy danh sách ảnh phê duyệt (chỉ admin)
export async function getPendingImages(pagination: PaginationParams, status?: ImageStatus) {
  const where = { 
    ...(status ? { status: status as ImageStatus } : { status: { in: ['pending', 'approved', 'rejected'] as ImageStatus[] } }),
    contributorId: { not: null } // chỉ lấy ảnh do người dùng đóng góp
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

// phê duyệt hoặc từ chối ảnh (chỉ admin)
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

  // cập nhật bản ghi ảnh
   const updatedImage = await prisma.$transaction(async (tx) => {
     // 1. kiểm tra xem taxon này đã có ảnh nào được duyệt chưa (trước khi duyệt ảnh này)
     let effectivelyPrimary = data.isPrimary;
 
     if (data.status === "approved" && effectivelyPrimary === undefined) {
        const approvedCount = await tx.taxonImage.count({
          where: { taxonId: image.taxonId, status: "approved", id: { not: id } }
        });
        // nếu chưa có ảnh nào -> mặc định gán làm ảnh chính
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
 
     // nếu ảnh này được gán làm ảnh chính -> reset các ảnh khác
     if (img.isPrimary && img.status === "approved") {
       await tx.taxonImage.updateMany({
         where: { taxonId: image.taxonId, id: { not: id } },
         data: { isPrimary: false }
       });
     }
 
     // luôn tính toán lại ảnh chính cho taxon để đảm bảo đồng bộ (đặc biệt khi reject ảnh đang làm primary)
     await recalculatePrimaryImageUrl(tx, image.taxonId);
 
     return img;
   });

  return updatedImage;
}

// tìm và xóa toàn bộ ảnh vật lý trên r2 thuộc về một taxon (dùng khi xóa taxon)
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

// thả tim hoặc gỡ tim cho ảnh
export async function toggleLike(userId: string, imageId: number) {
  // 1. kiểm tra sự tồn tại của ảnh và người đóng góp (chỉ cho phép tim ảnh của người dùng)
  const image = await prisma.taxonImage.findUnique({
    where: { id: imageId },
    select: { contributorId: true }
  });

  if (!image) throw ApiError.notFound("Không tìm thấy ảnh");
  if (!image.contributorId) {
    throw ApiError.forbidden("Chỉ có thể thả tim cho ảnh do người dùng đóng góp");
  }

  // 2. kiểm tra xem đã like chưa
  const existingLike = await prisma.taxonImageLike.findUnique({
    where: {
      userId_imageId: { userId, imageId }
    }
  });

  if (existingLike) {
    // nếu đã like -> xóa like
    await prisma.taxonImageLike.delete({
      where: { id: existingLike.id }
    });
    return { liked: false };
  } else {
    // nếu chưa like -> thêm like
    await prisma.taxonImageLike.create({
      data: { userId, imageId }
    });
    return { liked: true };
  }
}

// thống kê thành tích đóng góp của một người dùng
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

// thống kê ảnh đóng góp (admin)
export async function countStats() {
  const [total, pending, contributed] = await Promise.all([
    prisma.taxonImage.count(),
    prisma.taxonImage.count({ where: { status: "pending" } }),
    prisma.taxonImage.count({ where: { contributorId: { not: null } } }),
  ]);
  return { total, pending, contributed };
}

// lấy danh sách đóng góp của một người dùng cụ thể
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

// xóa một tấm ảnh (chỉ admin - standalone)
export async function deleteImage(id: number) {
  const image = await prisma.taxonImage.findUnique({
    where: { id },
    include: { taxon: true }
  });

  if (!image) {
    throw ApiError.notFound("Không tìm thấy ảnh để xóa");
  }

  // 1. thực hiện trong transaction để đảm bảo tính nhất quán
  await prisma.$transaction(async (tx) => {
    // xóa trong db
    await tx.taxonImage.delete({ where: { id } });

    // 2. nếu là ảnh chính của taxon -> tính toán và tìm ảnh thay thế tốt nhất
    if (image.taxon.primaryImageUrl === image.url) {
      await recalculatePrimaryImageUrl(tx, image.taxonId);
    }
  });

  // 3. xóa vật lý trên r2 (async)
  if (image.storageKey) {
    await deleteFromR2(image.storageKey).catch(e => 
      console.error(`[Cleanup] Failed to delete image ${id} from R2:`, e)
    );
  }

  return { id, deleted: true };
}


