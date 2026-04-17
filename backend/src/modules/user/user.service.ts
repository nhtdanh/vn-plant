import { prisma } from "../../config/prisma.js";
import { ApiError } from "../../utils/apiError.js";
import { processImage, uploadToR2, deleteFromR2, deleteMultipleFromR2 } from "../upload/upload.service.js";
import { R2_PUBLIC_DOMAIN } from "../../config/s3.config.js";
import type { UpdateProfileInput } from "./user.dto.js";
import { formatPaginatedResponse } from "../../utils/pagination.js";
import type { PaginationParams } from "../../utils/pagination.js";
import { normalizeUrl } from "../../utils/url.js";
import type { UserRole, UserStatus } from "../../../generated/prisma/index.js";
import bcrypt from "bcrypt";
import { SALT_ROUNDS } from "../../config/auth-config.js";

export async function getProfile(id: string) {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      displayName: true,
      avatarUrl: true,
      role: true,
      createdAt: true,
      _count: {
        select: {
          bookmarks: true,
        },
      },
    },
  });

  if (!user) {
    throw ApiError.notFound("Người dùng không tồn tại");
  }

  return {
    ...user,
    bookmarkCount: user._count.bookmarks,
    _count: undefined, // Remove nested count from response
  };
}

export async function updateProfile(id: string, data: UpdateProfileInput) {
  const user = await prisma.user.update({
    where: { id },
    data: {
      ...(data.displayName !== undefined && { displayName: data.displayName }),
    },
    select: {
      id: true,
      email: true,
      displayName: true,
      avatarUrl: true,
      role: true,
      createdAt: true,
    },
  });

  return user;
}

export async function updateAvatar(id: string, fileBuffer: Buffer) {
  // 1. Lấy thông tin user hiện tại để kiểm tra tồn tại và xóa ảnh cũ
  const currentUser = await prisma.user.findUnique({
    where: { id },
    select: { avatarUrl: true, id: true },
  });
  if (!currentUser) throw ApiError.notFound("Người dùng không tồn tại");

  const newR2Keys: string[] = [];

  try {
    // 2. Xử lý ảnh (Tối ưu hóa WebP)
    const processed = await processImage(fileBuffer);

    // 3. Upload lên R2
    // fileName hint dùng để lấy extension gốc nếu cần, nhưng uploadToR2 đã hash ngẫu nhiên
    const uploadResult = await uploadToR2(
      processed.buffer,
      "avatar.webp",
      "avatars",
      "image/webp"
    );
    newR2Keys.push(uploadResult.key);

    const newAvatarUrl = normalizeUrl(`${R2_PUBLIC_DOMAIN}/${uploadResult.key}`) as string;

    // 4. Cập nhật DB
    const user = await prisma.user.update({
      where: { id },
      data: { avatarUrl: newAvatarUrl },
      select: {
        id: true,
        email: true,
        displayName: true,
        avatarUrl: true,
        role: true,
        createdAt: true,
      },
    });

    // 5. Cleanup R2 SUCCESS: Xóa ảnh cũ trên R2 nếu có
    if (currentUser.avatarUrl && R2_PUBLIC_DOMAIN && currentUser.avatarUrl.includes(R2_PUBLIC_DOMAIN)) {
      try {
        const oldKey = currentUser.avatarUrl.replace(`${R2_PUBLIC_DOMAIN}/`, "");
        if (oldKey && oldKey !== currentUser.avatarUrl) {
          console.log(`[Cleanup] Deleting old avatar from R2: ${oldKey}`);
          deleteFromR2(oldKey).catch(e => 
            console.error("[Cleanup] Failed to delete old avatar async:", e)
          );
        }
      } catch (error) {
        console.warn("[Cleanup] Failed to parse/delete old avatar:", error);
      }
    }

    return user;
  } catch (error) {
    // 6. Rollback R2 FAIL: Xóa ảnh vừa upload nếu DB update thất bại
    if (newR2Keys.length > 0) {
      console.error(`[Cleanup] Avatar update failed, removing orphan file from R2...`);
      await deleteMultipleFromR2(newR2Keys).catch(e => 
        console.error("[Cleanup] Failed to rollback orphan avatar:", e)
      );
    }
    throw error;
  }
}

// === ADMIN METHODS ===

export async function listAllUsers(pagination: PaginationParams, role?: string, q?: string) {
  const where: any = {
    role: role ? role : { not: "admin" }, // Mặc định không lấy tài khoản admin trừ khi được yêu cầu cụ thể
    ...(q && {
      OR: [
        { email: { contains: q, mode: "insensitive" } },
        { displayName: { contains: q, mode: "insensitive" } },
      ],
    }),
  };

  const [total, items] = await Promise.all([
    prisma.user.count({ where }),
    prisma.user.findMany({
      where,
      ...pagination,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        email: true,
        displayName: true,
        role: true,
        status: true,
        createdAt: true,
        avatarUrl: true,
        _count: {
          select: { bookmarks: true, uploadedImages: true },
        },
      },
    }),
  ]);

  return formatPaginatedResponse(items, total, pagination);
}

export async function updateUserRole(id: string, role: UserRole) {
  return prisma.user.update({
    where: { id },
    data: { role },
    select: {
      id: true,
      email: true,
      displayName: true,
      role: true,
    },
  });
}

export async function updateUserStatus(id: string, status: UserStatus) {
  return prisma.user.update({
    where: { id },
    data: { status },
    select: {
      id: true,
      email: true,
      displayName: true,
      status: true,
    },
  });
}

export async function countTotalUsers() {
  const count = await prisma.user.count({
    where: { role: { not: 'admin' } }
  });
  return { total: count };
}

export async function adminCreateUser(data: { email: string; passwordHash: string; displayName?: string | null }) {
  const existing = await prisma.user.findUnique({
    where: { email: data.email },
  });
  
  if (existing) {
    throw ApiError.conflict("Email đã được sử dụng");
  }

  const passwordHash = await bcrypt.hash(data.passwordHash, SALT_ROUNDS);

  return prisma.user.create({
    data: {
      email: data.email,
      passwordHash,
      displayName: data.displayName || null,
      status: "active",
      role: "user",
    },
    select: {
      id: true,
      email: true,
      displayName: true,
      status: true,
      createdAt: true,
    },
  });
}


