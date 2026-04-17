import { prisma } from "../../config/prisma.js";
import { ApiError } from "../../utils/apiError.js";
import type { ListBookmarksQuery } from "./bookmark.dto.js";
import { getPaginationParams, formatPaginatedResponse } from "../../utils/pagination.js";

export async function addBookmark(userId: string, taxonId: number) {
  // Check if taxon exists
  const taxon = await prisma.taxon.findUnique({
    where: { id: taxonId },
  });

  if (!taxon) {
    throw ApiError.notFound("Không tìm thấy thông tin thực vật");
  }

  try {
    const bookmark = await prisma.bookmark.create({
      data: {
        userId,
        taxonId,
      },
      include: {
        taxon: {
          select: {
            id: true,
            slug: true,
            scientificName: true,
            canonicalName: true,
            vietnameseName: true,
            primaryImageUrl: true,
            rank: true,
          },
        },
      },
    });
    return bookmark;
  } catch (error: any) {
    // Handle unique constraint (already bookmarked)
    if (error.code === "P2002") {
      throw ApiError.conflict("Bạn đã lưu loài này trước đó");
    }
    throw error;
  }
}

export async function removeBookmark(userId: string, taxonId: number) {
  const result = await prisma.bookmark.deleteMany({
    where: {
      userId,
      taxonId,
    },
  });

  if (result.count === 0) {
    throw ApiError.notFound("Bạn chưa lưu loài này trong danh sách");
  }

  return { success: true };
}

export async function listBookmarks(userId: string, query: ListBookmarksQuery) {
  const pagination = getPaginationParams(query);

  const [total, items] = await Promise.all([
    prisma.bookmark.count({ where: { userId } }),
    prisma.bookmark.findMany({
      where: { userId },
      include: {
        taxon: {
          select: {
            id: true,
            slug: true,
            scientificName: true,
            canonicalName: true,
            vietnameseName: true,
            primaryImageUrl: true,
            rank: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
      ...pagination,
    }),
  ]);

  const formattedItems = items.map((i) => ({
    ...i.taxon,
    bookmarkedAt: i.createdAt,
  }));

  return formatPaginatedResponse(formattedItems, total, pagination);
}

export async function checkIsBookmarked(userId: string | undefined, taxonId: number) {
  if (!userId) return false;

  const bookmark = await prisma.bookmark.findUnique({
    where: {
      userId_taxonId: {
        userId,
        taxonId,
      },
    },
  });

  return !!bookmark;
}

