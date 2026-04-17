import { TaxonomyRank, Prisma } from "../../../generated/prisma";
import { ApiError } from "../../utils/apiError";

/**
 * Thứ tự phân bậc từ cao xuống thấp
 */
export const RANK_ORDER: TaxonomyRank[] = [
  "kingdom",
  "phylum",
  "taxonomicClass",
  "order",
  "family",
  "genus",
  "species",
  "subspecies",
  "variety",
  "forma",
];

/**
 * Kiểm tra xem cha có bậc cao hơn con không
 */
export function validateRankHierarchy(parentRank: TaxonomyRank, childRank: TaxonomyRank) {
  const parentIdx = RANK_ORDER.indexOf(parentRank);
  const childIdx = RANK_ORDER.indexOf(childRank);

  if (parentIdx >= childIdx) {
    throw ApiError.badRequest(
      `Ràng buộc thứ bậc: Cấp bậc '${parentRank}' không thể là cha của '${childRank}'. Cha phải có cấp bậc cao hơn.`
    );
  }
}

/**
 * Chuyển đổi Rank String sang Rank Order Index (để sort hoặc filter)
 */
export function getRankLevel(rank: TaxonomyRank): number {
  return RANK_ORDER.indexOf(rank);
}

/**
 * Tính toán và cập nhật ảnh chính cho Taxon dựa trên độ ưu tiên:
 * 1. Ảnh được đánh dấu isPrimary: true
 * 2. Ảnh có sortOrder thấp nhất
 * 3. Ảnh được tạo sớm nhất
 */
export async function recalculatePrimaryImageUrl(tx: Prisma.TransactionClient, taxonId: number) {
  const images = await tx.taxonImage.findMany({
    where: { taxonId, status: "approved" },
    orderBy: [
      { isPrimary: "desc" },
      { sortOrder: "asc" },
      { createdAt: "asc" }
    ],
    take: 1,
    select: { url: true }
  });

  const primaryUrl = images[0]?.url || null;
  
  await tx.taxon.update({
    where: { id: taxonId },
    data: { primaryImageUrl: primaryUrl }
  });

  return primaryUrl;
}
