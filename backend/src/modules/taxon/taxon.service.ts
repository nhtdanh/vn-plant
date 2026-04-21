import { Prisma, ImageStatus } from "../../../generated/prisma/index.js";
import { prisma } from "../../config/prisma.js";
import type { GetTaxaQuery } from "./taxon.dto.js";
import { ApiError } from "../../utils/apiError.js";
import { generateSlug } from "../../utils/slug.js";
import {
  type CreateTaxonInput,
  type UpdateTaxonInput,
  type AdminTaxaQuery,
} from "./adminTaxon.dto.js";
import { validateRankHierarchy, recalculatePrimaryImageUrl } from "./taxon.utils.js";
import * as uploadService from "../upload/upload.service.js";
import {
  getPaginationParams,
  formatPaginatedResponse,
} from "../../utils/pagination.js";
import { normalizeUrl } from "../../utils/url.js";
import { R2_PUBLIC_DOMAIN } from "../../config/s3.config.js";






// Lấy danh sách Taxa hỗ trợ lọc và phân trang
export async function findAll(query: GetTaxaQuery) {
  const { rank, group, parentId, q, province } = query;
  const pagination = getPaginationParams(query);
  const { take: limit, skip: offset } = pagination;

  // Map province names to IDs
  let provinceIds: number[] = [];
  if (province && province.length > 0) {
    const provinces = await prisma.province.findMany({
      where: { name: { in: province } },
      select: { id: true },
    });
    provinceIds = provinces.map((p) => p.id);
  }

  // Trường hợp 1: Có từ khóa tìm kiếm
  if (q) {
    const items: any[] = await prisma.$queryRaw`
      WITH search_stats AS (
        SELECT 
          t.id,
          -- FTS Rank
          ts_rank_cd(t.search_vector, websearch_to_tsquery('simple', ${q})) as fts_score,
          -- Trigram Score
          GREATEST(
            similarity(t.vietnamese_name, ${q}) * 1.5,
            similarity(t.scientific_name, ${q}),
            COALESCE((SELECT MAX(similarity(cn.name, ${q})) FROM taxon_common_name cn WHERE cn.taxon_id = t.id), 0),
            COALESCE((SELECT MAX(similarity(s.scientific_name, ${q})) FROM taxon_synonym s WHERE s.taxon_id = t.id), 0)
          ) as trgm_score
        FROM taxon t
        ${provinceIds.length > 0 ? Prisma.sql`JOIN taxon_province tp ON t.id = tp.taxon_id` : Prisma.empty}
        WHERE 
          (
            t.search_vector @@ websearch_to_tsquery('simple', ${q})
            OR t.scientific_name % ${q}
            OR t.vietnamese_name % ${q}
            OR EXISTS (SELECT 1 FROM taxon_common_name cn WHERE cn.taxon_id = t.id AND cn.name % ${q})
            OR EXISTS (SELECT 1 FROM taxon_synonym s WHERE s.taxon_id = t.id AND s.scientific_name % ${q})
          )
          AND t.status = 'published'
          ${rank && rank.length > 0 ? Prisma.sql`AND t.rank = ANY(${rank}::"TaxonomyRank"[])` : Prisma.empty}
          ${group && group.length > 0 ? Prisma.sql`AND t.plant_group = ANY(${group}::"PlantGroup"[])` : Prisma.empty}
          ${parentId ? Prisma.sql`AND t.parent_id = ${parentId}` : Prisma.empty}
          ${provinceIds.length > 0 ? Prisma.sql`AND tp.province_id = ANY(${provinceIds}::integer[])` : Prisma.empty}
        GROUP BY t.id  -- Sửa lỗi trùng lặp khi một loài ở nhiều tỉnh thành
      )
      SELECT 
        t.id, t.slug, t.canonical_name as "canonicalName", 
        t.scientific_name as "scientificName", t.vietnamese_name as "vietnameseName",
        t.primary_image_url as "primaryImageUrl",
        t.rank, t.description_lang as "descriptionLang",
        t.has_vietnam_record as "hasVietnamRecord",
        t.order_in_book as "orderInBook",
        ((COALESCE(s.fts_score, 0) * 10) + COALESCE(s.trgm_score, 0)) as score
      FROM taxon t
      JOIN search_stats s ON t.id = s.id
      ORDER BY score DESC NULLS LAST, t.scientific_name ASC
      LIMIT ${limit} OFFSET ${offset}
    `;

    // Đếm tổng số
    const countResult: any[] = await prisma.$queryRaw`
      SELECT COUNT(*)::int as total
      FROM (
        SELECT t.id
        FROM taxon t
        WHERE 
          (
            t.search_vector @@ websearch_to_tsquery('simple', ${q})
            OR t.scientific_name % ${q}
            OR t.vietnamese_name % ${q}
            OR EXISTS (SELECT 1 FROM taxon_common_name cn WHERE cn.taxon_id = t.id AND cn.name % ${q})
            OR EXISTS (SELECT 1 FROM taxon_synonym s WHERE s.taxon_id = t.id AND s.scientific_name % ${q})
          )
          AND t.status = 'published'
          ${rank && rank.length > 0 ? Prisma.sql`AND t.rank = ANY(${rank}::"TaxonomyRank"[])` : Prisma.empty}
          ${group && group.length > 0 ? Prisma.sql`AND t.plant_group = ANY(${group}::"PlantGroup"[])` : Prisma.empty}
          ${parentId ? Prisma.sql`AND t.parent_id = ${parentId}` : Prisma.empty}
          ${provinceIds.length > 0 ? Prisma.sql`AND EXISTS (SELECT 1 FROM taxon_province tp WHERE tp.taxon_id = t.id AND tp.province_id = ANY(${provinceIds}::integer[]))` : Prisma.empty}
      ) as subquery
    `;

    const total = countResult[0]?.total || 0;
    return formatPaginatedResponse(items, total, pagination);
  }

  // Trường hợp 2: Không có từ khóa (Lấy danh sách bình thường bằng Prisma)
  const where: Prisma.TaxonWhereInput = {
    status: "published",
    ...(rank && rank.length > 0 && { rank: { in: rank } }),
    ...(group && group.length > 0 && { plantGroup: { in: group } }),
    ...(parentId !== undefined && { parentId }),
    ...(provinceIds.length > 0 && {
      provinces: {
        some: { provinceId: { in: provinceIds } },
      },
    }),
  };

  const [total, items] = await Promise.all([
    prisma.taxon.count({ where }),
    prisma.taxon.findMany({
      where,
      ...pagination,
      orderBy: { scientificName: "asc" },
      // Không cần include images ở đây nữa vì đã có primaryImageUrl
    }),
  ]);

  return formatPaginatedResponse(items, total, pagination);
}
// === UTILITY METHODS FOR FRONTEND ===

// === UTILITY METHODS FOR FRONTEND ===

/**
 * Láy các hằng số hệ thống (Enum)
 */
export async function getMetadata() {
  return {
    ranks: [
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
    ],
    plantGroups: ["angiosperm", "gymnosperm", "fern"],
    status: ["draft", "published", "archived"],
  };
}

/**
 * Lấy danh sách toàn bộ các tỉnh thành
 */
export async function getProvinces() {
  return prisma.province.findMany({
    orderBy: { name: "asc" },
  });
}

/**
 * Lấy các loài tương tự (Cùng chi/Genus hoặc cùng cấp)
 */
export async function getRelatedTaxa(id: number, limit = 5) {
  const current = await prisma.taxon.findUnique({
    where: { id },
    select: { parentId: true, rank: true },
  });

  if (!current || !current.parentId) return [];

  return prisma.taxon.findMany({
    where: {
      parentId: current.parentId,
      id: { not: id },
      status: "published",
    },
    take: limit,
    orderBy: { scientificName: "asc" },
  });
}

/**
 * Gợi ý tìm kiếm nhanh (Autocomplete)
 * Chỉ dùng Trigram trên Tên khoa học, Tên Việt và Tên thường gọi để đạt tốc độ tối đa.
 */
export async function suggestTaxa(q: string, limit = 10) {
  // Thuật toán Smart Autocomplete:
  // 1. Prefix Boost: Khớp từ đầu tiên (e.g. "Lan...") -> +2.0 điểm
  // 2. Similarity Boost: Độ tương đồng mặt chữ -> +1.0 điểm
  // 3. Common Name: Khớp tên thường gọi -> +0.5 điểm
  // 4. Rank Priority: Ưu tiên Species/Genus -> +0.5 điểm
  const items: any[] = await prisma.$queryRaw`
    SELECT 
      t.id, t.scientific_name as "scientificName", t.canonical_name as "canonicalName",
      t.vietnamese_name as "vietnameseName", 
      t.slug, t.rank, t.primary_image_url as "primaryImageUrl",
      (
        (CASE WHEN t.scientific_name ILIKE ${q + "%"} THEN 2.0 ELSE 0 END) +
        (CASE WHEN t.vietnamese_name ILIKE ${q + "%"} THEN 1.5 ELSE 0 END) +
        similarity(t.scientific_name, ${q}) +
        (CASE WHEN t.rank IN ('species', 'genus') THEN 0.5 ELSE 0 END) +
        (CASE WHEN EXISTS (SELECT 1 FROM taxon_common_name cn WHERE cn.taxon_id = t.id AND cn.name ILIKE ${q + "%"}) THEN 0.5 ELSE 0 END) +
        (CASE WHEN EXISTS (SELECT 1 FROM taxon_synonym s WHERE s.taxon_id = t.id AND s.scientific_name ILIKE ${q + "%"}) THEN 0.5 ELSE 0 END)
      ) as score
    FROM taxon t
    WHERE 
      (
        t.scientific_name % ${q} 
        OR t.vietnamese_name % ${q} 
        OR t.scientific_name ILIKE ${q + "%"}
        OR EXISTS (SELECT 1 FROM taxon_common_name cn WHERE cn.taxon_id = t.id AND cn.name % ${q})
        OR EXISTS (SELECT 1 FROM taxon_synonym s WHERE s.taxon_id = t.id AND s.scientific_name % ${q})
      )
      AND t.status = 'published'
    ORDER BY score DESC NULLS LAST, t.scientific_name ASC
    LIMIT ${limit}
  `;

  return items;
}

/**
 * Lấy danh sách tổ tiên (Breadcrumbs)
 * Sử dụng ltree toán tử @> (ancestor of)
 */
export async function getAncestors(id: number) {
  // 1. Lấy path của bản ghi hiện tại bằng SQL raw (vì ltree là Unsupported type)
  const taxonResult: any[] = await prisma.$queryRaw`
    SELECT path::text as "path" FROM taxon WHERE id = ${id}
  `;

  const path = taxonResult[0]?.path;
  if (!path) return [];

  // 2. Tìm tất cả các bản ghi mà path của chúng là tiền tố (ancestor) của path hiện tại
  // Dùng id != ${id} để loại bỏ chính nút hiện tại (vì @> trong ltree là "ancestor OR EQUAL")
  const ancestors: any[] = await prisma.$queryRaw`
    SELECT 
      id, 
      scientific_name as "scientificName", 
      canonical_name as "canonicalName",
      vietnamese_name as "vietnameseName", 
      slug, 
      rank
    FROM taxon
    WHERE path @> ${path}::ltree
      AND id != ${id}
    ORDER BY nlevel(path) ASC
  `;

  // 3. Logic "Smart Name Truncation": Chỉ hiển thị phần định danh riêng biệt
  return ancestors.map((node, index) => {
    // Ưu tiên dùng canonicalName (không có tác giả) để hiển thị trong Breadcrumb
    let displayName = node.canonicalName || node.scientificName;

    if (index > 0) {
      const parentName = ancestors[index - 1].canonicalName || ancestors[index - 1].scientificName;
      // Nếu tên con bắt đầu bằng tên cha (ví dụ: "Rosa canina" bắt đầu bằng "Rosa")
      if (displayName.startsWith(parentName)) {
        // Cắt bỏ phần tên cha và khoảng trắng
        displayName = displayName.substring(parentName.length).trim();

        // Nếu kết quả rỗng (trường hợp hiếm khi dữ liệu lỗi), quay lại tên gốc
        if (!displayName) displayName = node.canonicalName || node.scientificName;
      }
    }

    return {
      ...node,
      displayName,
    };
  });
}

// === ADMIN METHODS ===

export async function countStats() {
  const [total, published, draft] = await Promise.all([
    prisma.taxon.count(),
    prisma.taxon.count({ where: { status: "published" } }),
    prisma.taxon.count({ where: { status: "draft" } }),
  ]);
  return { total, published, draft };
}

/**
 * Lấy dữ liệu phân bổ theo rank và plant group cho biểu đồ
 */
export async function getDistributionStats() {
  const [ranks, groups] = await Promise.all([
    prisma.taxon.groupBy({
      by: ["rank"],
      _count: { _all: true },
      where: { rank: { not: "kingdom" } },
    }),
    prisma.taxon.groupBy({
      by: ["plantGroup"],
      _count: { _all: true },
    }),
  ]);

  return {
    ranks: ranks.map((r) => ({ name: r.rank, value: r._count._all })),
    groups: groups.map((g) => ({ 
      name: g.plantGroup || "Chưa phân loại", 
      value: g._count._all 
    })),
  };
}

/**
 * Thực hiện kiểm toán toàn bộ hệ thống để tìm các bản ghi thiếu thông tin
 */
export async function getSystemAudit() {
  const [noImages, noVietName, noDescription] = await Promise.all([
    // 1. Không có ảnh đại diện (Chỉ tính cho loài)
    prisma.taxon.count({
      where: { primaryImageUrl: null, rank: "species" },
    }),
    // 2. Thiếu tên tiếng Việt (Chỉ tính cho loài)
    prisma.taxon.count({
      where: { 
        OR: [{ vietnameseName: null }, { vietnameseName: "" }],
        rank: "species"
      },
    }),
    // 3. Thiếu mô tả GỐC (rawDescriptionInBook) - Chỉ tính cho loài
    prisma.taxon.count({
      where: { 
        OR: [
          { rawDescriptionInBook: null },
          { rawDescriptionInBook: "" },
        ],
        rank: "species"
      },
    }),
  ]);

  return { noImages, noVietName, noDescription };
}

export async function updatePrimaryImage(id: number, url: string | null) {
  return prisma.taxon.update({
    where: { id },
    data: { primaryImageUrl: url },
  });
}


export async function findAllAdmin(query: AdminTaxaQuery) {
  const { status, rank, plantGroup, hasImage, hasDescription, hasVietnamName, q } = query;
  const pagination = getPaginationParams(query);

  const where: any = {
    ...(status && { status }),
    ...(rank && rank.length > 0 && { rank: { in: rank } }),
    ...(plantGroup && plantGroup.length > 0 && { plantGroup: { in: plantGroup } }),
    ...(hasImage !== undefined && {
      primaryImageUrl: hasImage ? { not: null } : null,
    }),
    ...(hasDescription !== undefined && {
      description: hasDescription ? { not: null } : null,
    }),
    ...(hasVietnamName !== undefined && (
      hasVietnamName
        // Có tên Việt: vietnameseName không null VÀ không rỗng
        ? { AND: [{ vietnameseName: { not: null } }, { vietnameseName: { not: "" } }] }
        // Chưa có tên Việt: null HOẶC chuỗi rỗng
        : { OR: [{ vietnameseName: null }, { vietnameseName: "" }] }
    )),
    ...(q && {
      OR: [
        { scientificName: { contains: q, mode: "insensitive" } },
        { vietnameseName: { contains: q, mode: "insensitive" } },
        { slug: { contains: q, mode: "insensitive" } },
      ],
    }),
  };

  const [total, items] = await Promise.all([
    prisma.taxon.count({ where }),
    prisma.taxon.findMany({
      where,
      ...pagination,
      orderBy: { updatedAt: "desc" },
    }),
  ]);

  return formatPaginatedResponse(items, total, pagination);
}

export async function findByIdAdmin(id: number) {
  const taxon = await prisma.taxon.findUnique({
    where: { id },
    include: {
      synonyms: true,
      commonNames: true,
      images: { orderBy: { sortOrder: "asc" } },
      provinces: { include: { province: true } },
      parent: { select: { id: true, scientificName: true } }
    }
  });
  if (!taxon) throw ApiError.notFound("Không tìm thấy thực vật");
  return taxon;
}

export async function createTaxon(data: CreateTaxonInput, files?: any[]) {
  // 1. Kiểm tra tồn tại và cấp bậc (Fail-fast before expensive operations)
  const existing = await prisma.taxon.findFirst({
    where: { scientificName: data.scientificName },
  });
  if (existing) {
    throw ApiError.badRequest(`Tên khoa học '${data.scientificName}' đã tồn tại.`);
  }

  // Kiểm tra cấu trúc rễ/cha nếu có
  if (data.parentId) {
    const parent = await prisma.taxon.findUnique({
      where: { id: data.parentId },
      select: { rank: true },
    });
    if (!parent) throw ApiError.notFound("Không tìm thấy Taxon cha");
    validateRankHierarchy(parent.rank, data.rank);
  }

  const newR2Keys: string[] = [];
  const uploadedImages: any[] = [];

  try {
    // 2. Xử lý Upload Ảnh R2
    if (files && files.length > 0) {
      for (const file of files) {
        const processed = await uploadService.processImage(file.buffer);
        const result = await uploadService.uploadToR2(
          processed.buffer,
          file.originalname,
          "taxa",
          "image/webp",
        );
        
        newR2Keys.push(result.key);
        const publicUrl = normalizeUrl(`${R2_PUBLIC_DOMAIN}/${result.key}`) as string;

        uploadedImages.push({
          url: publicUrl,
          storageKey: result.key,
          width: processed.width,
          height: processed.height,
          status: "approved",
          isPrimary: uploadedImages.length === 0,
        });
      }
    }

    // 3. Transaction ghi dữ liệu
    return await prisma.$transaction(async (tx) => {
      // 3.1 Tính toán ID tiếp theo
      const maxResult: any[] = await tx.$queryRaw`SELECT MAX(id) as max_id FROM taxon`;
      const nextId = (maxResult[0]?.max_id || 10000000) + 1;

      // 3.2 Xây dựng Hierarchy Path
      let path = "";
      if (data.parentId) {
        // Lấy lại path của cha trong transaction
        const parentResult: any[] = await tx.$queryRaw`SELECT path::text FROM taxon WHERE id = ${data.parentId}`;
        const parentPath = parentResult[0]?.path || "";
        path = `${parentPath}.${nextId}`;
      } else {
        path = nextId.toString();
      }

      const slug = generateSlug(data.scientificName);
      // Ưu tiên chọn ảnh được chỉ định làm Primary từ upload, hoặc ảnh đầu tiên trong list
      const initialPrimaryImageUrl = normalizeUrl(
        uploadedImages.find((i) => i.isPrimary)?.url || data.images?.[0]?.url
      );

      const createData: any = {
        id: nextId,
        slug,
        scientificName: data.scientificName,
        canonicalName: data.canonicalName || data.scientificName,
        vietnameseName: data.vietnameseName,
        rank: data.rank,
        parentId: data.parentId,
        plantGroup: data.plantGroup,
        author: data.author,
        status: data.status,
        habit: data.habit,
        leaf: data.leaf,
        reproduction: data.reproduction,
        phenology: data.phenology,
        value: data.value,
        distributionText: data.distributionText,
        note: data.note,
        rawDescriptionInBook: data.rawDescriptionInBook,
        primaryImageUrl: initialPrimaryImageUrl,
        orderInBook: data.orderInBook,
        sourceName: data.sourceName,
      };

      // Quan hệ Synonyms
      if (data.synonyms?.length) {
        createData.synonyms = {
          create: data.synonyms.map((s) => ({
            scientificName: s.scientificName,
            sourceName: s.sourceName || "Admin Entry",
            externalId: s.externalId,
          })),
        };
      }

      // Quan hệ Common Names
      if (data.commonNames?.length) {
        createData.commonNames = {
          create: data.commonNames.map((cn) => ({
            name: cn.name,
            language: cn.language,
            isPrimary: cn.isPrimary,
          })),
        };
      }

      // Quan hệ Hình ảnh — Chỉ dùng uploadedImages (đã có URL R2 thật)
      // Ghép metadata (caption/author/isPrimary) từ data.images theo index
      const newImageMetaCreate = (data.images || []).filter((img: any) => img.url === "new_upload");
      if (uploadedImages.length > 0) {
        createData.images = {
          create: uploadedImages.map((img, i) => {
            const meta = newImageMetaCreate[i];
            return {
              url: normalizeUrl(img.url) as string,
              storageKey: img.storageKey,
              width: img.width,
              height: img.height,
              caption: meta?.caption || null,
              author: meta?.author || null,
              isPrimary: meta ? !!meta.isPrimary : i === 0,
              status: "approved" as ImageStatus,
            };
          }),
        };
        const primaryMeta = newImageMetaCreate.find((m: any) => m.isPrimary);
        const primaryIdx = primaryMeta ? newImageMetaCreate.indexOf(primaryMeta) : 0;
        if (uploadedImages[primaryIdx]) {
          createData.primaryImageUrl = normalizeUrl(uploadedImages[primaryIdx].url);
        }
      }

      // Quan hệ Địa lý
      if (data.provinceIds?.length) {
        createData.provinces = {
          create: data.provinceIds.map((pid) => ({ provinceId: pid })),
        };
      }

      const taxon = await tx.taxon.create({ data: createData });

      // Ghi kiểu ltree bằng raw query
      await tx.$executeRawUnsafe(
        `UPDATE taxon SET path = $1::ltree WHERE id = $2`,
        path,
        taxon.id,
      );

      return { ...taxon, path };
    });
  } catch (error) {
    // 4. Rollback R2: Nếu DB thất bại, xóa ảnh vừa upload để tránh "mồ côi"
    if (newR2Keys.length > 0) {
      console.error(`[Cleanup] Transaction failed, removing ${newR2Keys.length} orphan images from R2...`);
      await uploadService.deleteMultipleFromR2(newR2Keys).catch((e) =>
        console.error("[Cleanup] Failed to delete orphan images during rollback:", e)
      );
    }
    throw error;
  }
}

export async function updateTaxon(
  id: number,
  data: UpdateTaxonInput,
  files?: any[],
) {
  // 1. Kiểm tra tồn tại và quyền sơ bộ
  const original = await prisma.taxon.findUnique({
    where: { id },
    select: { id: true, parentId: true, rank: true, scientificName: true },
  });
  if (!original) throw ApiError.notFound("Không tìm thấy thực vật");

  // Kiểm tra trùng tên khoa học
  if (data.scientificName && data.scientificName !== original.scientificName) {
    const duplicate = await prisma.taxon.findFirst({
      where: { scientificName: data.scientificName, NOT: { id } },
    });
    if (duplicate) throw ApiError.badRequest(`Tên khoa học '${data.scientificName}' đã bị trùng.`);
  }

  const newR2Keys: string[] = [];
  const oldR2KeysToDelete: string[] = [];
  const uploadedImages: any[] = [];

  try {
    // 2. Xử lý Upload Ảnh mới lên R2
    if (files && files.length > 0) {
      for (const file of files) {
        const processed = await uploadService.processImage(file.buffer);
        const result = await uploadService.uploadToR2(
          processed.buffer,
          file.originalname,
          "taxa",
          "image/webp",
        );
        newR2Keys.push(result.key);
        const publicUrl = normalizeUrl(`${R2_PUBLIC_DOMAIN}/${result.key}`) as string;

        uploadedImages.push({
          url: publicUrl,
          storageKey: result.key,
          width: processed.width,
          height: processed.height,
          status: "approved",
        });
      }
    }

    // 3. Thực thi cập nhật trong Transaction
    const result = await prisma.$transaction(async (tx) => {
      // 3.1 Lấy path hiện tại TRONG transaction để đảm bảo nhất quán
      const pathResult: any[] = await tx.$queryRaw`SELECT path::text FROM taxon WHERE id = ${id}`;
      const oldPath = pathResult[0]?.path || "";

      // 3.2 Xử lý logic thay đổi Cha (Move branch)
      let newPath: string | null = null;
      if (data.parentId !== undefined && data.parentId !== original.parentId) {
        if (data.parentId === id) throw ApiError.badRequest("Không thể chọn chính mình làm cha");

        if (data.parentId) {
          const newParent = await tx.taxon.findUnique({
            where: { id: data.parentId },
            select: { id: true, rank: true },
          });
          if (!newParent) throw ApiError.notFound("Không tìm thấy Taxon cha mới");

          const newParentPathResult: any[] = await tx.$queryRaw`SELECT path::text FROM taxon WHERE id = ${data.parentId}`;
          const newParentPath = newParentPathResult[0]?.path || "";

          validateRankHierarchy(newParent.rank, data.rank || original.rank);

          // Kiểm tra vòng lặp: Cha mới không được là con của chính nó
          if (newParentPath === oldPath || newParentPath.startsWith(`${oldPath}.`)) {
            throw ApiError.badRequest("Vi phạm cấu trúc: Cha mới không được là con cháu của taxon hiện tại.");
          }
          newPath = `${newParentPath}.${id}`;
        } else {
          newPath = id.toString();
        }
      }

      // --- 3.3 SMART SYNC IMAGES ---
      // Tách metadata: ảnh cũ (có URL thật) vs ảnh mới (url === "new_upload")
      const existingImageMeta = (data.images || []).filter(img => img.url && img.url !== "new_upload");
      const newImageMeta     = (data.images || []).filter(img => img.url === "new_upload");

      const currentImages = await tx.taxonImage.findMany({
        where: { taxonId: id },
        select: { id: true, url: true, storageKey: true }
      });

      // Ảnh cần xóa: có trong deleteImageIds HOẶC không còn trong danh sách ảnh cũ
      const keepUrls = new Set(existingImageMeta.map(m => m.url));
      const imagesToDelete = currentImages.filter(img => {
        if (data.deleteImageIds?.includes(img.id)) return true;
        if (data.images !== undefined && !keepUrls.has(img.url)) return true;
        return false;
      });

      if (imagesToDelete.length > 0) {
        imagesToDelete.forEach(img => {
          if (img.storageKey) oldR2KeysToDelete.push(img.storageKey);
        });
        await tx.taxonImage.deleteMany({
          where: { id: { in: imagesToDelete.map(i => i.id) } }
        });
      }

      // Update metadata (caption, author, isPrimary) cho ảnh cũ còn lại
      for (const meta of existingImageMeta) {
        const existing = currentImages.find(ci => ci.url === meta.url);
        if (existing && !imagesToDelete.some(d => d.id === existing.id)) {
          await tx.taxonImage.update({
            where: { id: existing.id },
            data: {
              caption: meta.caption ?? null,
              author: meta.author ?? null,
              isPrimary: !!meta.isPrimary,
            }
          });
        }
      }

      // --- 3.4 SMART SYNC RELATIONS (DIFFING) ---
      
      // Sync Synonyms (Dựa trên scientificName)
      if (data.synonyms !== undefined) {
        const current = await tx.taxonSynonym.findMany({ where: { taxonId: id } });
        const toDelete = current.filter(c => !data.synonyms?.some(n => n.scientificName === c.scientificName));
        const toCreate = data.synonyms.filter(n => !current.some(c => c.scientificName === n.scientificName));

        if (toDelete.length > 0) {
          await tx.taxonSynonym.deleteMany({ where: { id: { in: toDelete.map(d => d.id) } } });
        }
        if (toCreate.length > 0) {
          await tx.taxonSynonym.createMany({
            data: toCreate.map(s => ({
              taxonId: id,
              scientificName: s.scientificName,
              sourceName: s.sourceName || "Admin Update",
              externalId: s.externalId || null
            }))
          });
        }
      }

      // Sync Common Names (Dựa trên cặp name + language)
      if (data.commonNames !== undefined) {
        const current = await tx.taxonCommonName.findMany({ where: { taxonId: id } });
        const toDelete = current.filter(c => !data.commonNames?.some(n => n.name === c.name && n.language === c.language));
        const toCreate = data.commonNames.filter(n => !current.some(c => c.name === n.name && c.language === n.language));

        if (toDelete.length > 0) {
          await tx.taxonCommonName.deleteMany({ where: { id: { in: toDelete.map(d => d.id) } } });
        }
        if (toCreate.length > 0) {
          await tx.taxonCommonName.createMany({
            data: toCreate.map(cn => ({
              taxonId: id,
              name: cn.name,
              language: cn.language,
              isPrimary: cn.isPrimary
            }))
          });
        }
      }

      // Sync Provinces (Dựa trên provinceId)
      if (data.provinceIds !== undefined) {
        const current = await tx.taxonProvince.findMany({ where: { taxonId: id } });
        const currentIds = current.map(p => p.provinceId);
        
        const toDelete = currentIds.filter(pid => !data.provinceIds?.includes(pid));
        const toCreate = (data.provinceIds || []).filter(pid => !currentIds.includes(pid));

        if (toDelete.length > 0) {
          await tx.taxonProvince.deleteMany({
            where: { taxonId: id, provinceId: { in: toDelete } }
          });
        }
        if (toCreate.length > 0) {
          await tx.taxonProvince.createMany({
            data: toCreate.map(pid => ({ taxonId: id, provinceId: pid }))
          });
        }
      }

      // --- 3.5 CHUẨN BỊ DỮ LIỆU CẬP NHẬT ---
      // Liệt kê rõ ràng từng field — tránh spread DTO thô vào Prisma (an toàn hơn)
      const updateData: any = {
        // Thông tin cơ bản
        ...(data.scientificName !== undefined && {
          scientificName: data.scientificName,
          slug: generateSlug(data.scientificName),
          canonicalName: data.canonicalName || data.scientificName,
        }),
        ...(data.vietnameseName !== undefined && { vietnameseName: data.vietnameseName }),
        ...(data.author !== undefined && { author: data.author }),
        ...(data.rank !== undefined && { rank: data.rank }),
        ...(data.status !== undefined && { status: data.status }),
        ...(data.plantGroup !== undefined && { plantGroup: data.plantGroup }),
        ...(data.parentId !== undefined && { parentId: data.parentId }),
        ...(data.hasVietnamRecord !== undefined && { hasVietnamRecord: data.hasVietnamRecord }),
        // Mô tả sinh học
        ...(data.description !== undefined && { description: data.description }),
        ...(data.rawDescriptionInBook !== undefined && { rawDescriptionInBook: data.rawDescriptionInBook }),
        ...(data.habit !== undefined && { habit: data.habit }),
        ...(data.leaf !== undefined && { leaf: data.leaf }),
        ...(data.reproduction !== undefined && { reproduction: data.reproduction }),
        ...(data.phenology !== undefined && { phenology: data.phenology }),
        ...(data.value !== undefined && { value: data.value }),
        ...(data.distributionText !== undefined && { distributionText: data.distributionText }),
        ...(data.note !== undefined && { note: data.note }),
        // Metadata biên mục
        ...(data.orderInBook !== undefined && { orderInBook: data.orderInBook }),
        ...(data.sourceName !== undefined && { sourceName: data.sourceName }),
        ...(data.descriptionLang !== undefined && { descriptionLang: data.descriptionLang }),
      };

      // --- 3.6 XỬ LÝ ẢNH MỚI (TẠO BẢN GHI) ---
      // Ghép file upload với metadata (newImageMeta[i] <-> uploadedImages[i])
      const imagesToCreate = uploadedImages.map((img, i) => {
        const meta = newImageMeta[i]; // metadata tương ứng theo thứ tự frontend gửi
        return {
          url: normalizeUrl(img.url) as string,
          storageKey: img.storageKey,
          width: img.width,
          height: img.height,
          caption: meta?.caption || null,
          author: meta?.author || null,
          isPrimary: meta ? !!meta.isPrimary : false,
          status: "approved" as ImageStatus,
          taxonId: id
        };
      });

      if (imagesToCreate.length > 0) {
        await tx.taxonImage.createMany({ data: imagesToCreate });
      }

      // --- 3.7 KIỂM TRA HIERARCHY ---
      if (data.parentId !== undefined || data.rank !== undefined) {
        const targetRank = data.rank || original.rank;
        const targetParentId = data.parentId !== undefined ? data.parentId : original.parentId;

        if (targetParentId) {
          const parent = await tx.taxon.findUnique({
            where: { id: targetParentId },
            select: { rank: true },
          });
          if (parent) {
            validateRankHierarchy(parent.rank, targetRank);
          }
        }
      }

      // --- 3.8 DI CHUYỂN NHÁNH (LTREE) ---
      if (newPath) {
        await tx.$executeRawUnsafe(
          `UPDATE taxon 
           SET path = ($1::ltree || subpath(path, nlevel($2::ltree))) 
           WHERE path <@ ($2::ltree)`,
          newPath,
          oldPath,
        );
      }

      // --- 3.9 ĐỒNG BỘ ẢNH CHÍNH (VÀ CẬP NHẬT TAXON) ---
      // Tính toán ảnh chính sau khi đã createMany ảnh mới
      const primaryUrl = await recalculatePrimaryImageUrl(tx, id, true);
      updateData.primaryImageUrl = primaryUrl;

      const updated = await tx.taxon.update({
        where: { id },
        data: updateData,
      });

      return updated;
    });

    // 4. Cleanup R2 SUCCESS
    if (oldR2KeysToDelete.length > 0) {
      console.log(`[Cleanup] Post-update cleanup: removing ${oldR2KeysToDelete.length} obsolete images from R2...`);
      uploadService.deleteMultipleFromR2(oldR2KeysToDelete).catch(e => 
        console.error("[Cleanup] Failed to clean up obsolete images:", e)
      );
    }

    return result;
  } catch (error) {
    // Logging chi tiết lỗi cho nhà phát triển
    console.error("===== TAXON UPDATE ERROR =====");
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.error(`Prisma Error Code: ${error.code}`);
      console.error(`Target: ${error.meta?.target}`);
      console.error(`Message: ${error.message}`);
    } else {
      console.error(error);
    }
    console.error("==============================");

    // 5. Cleanup R2 FAIL: Xóa ảnh vừa upload nếu transaction thất bại
    if (newR2Keys.length > 0) {
      console.error(`[Cleanup] Update failed, removing ${newR2Keys.length} orphan images from R2...`);
      await uploadService.deleteMultipleFromR2(newR2Keys).catch(e => 
        console.error("[Cleanup] Failed to delete orphan images during rollback:", e)
      );
    }
    throw error;
  }
}

export async function deleteTaxon(id: number) {
  const taxon = await prisma.taxon.findUnique({
    where: { id },
    include: { children: { select: { id: true } } },
  });

  if (!taxon) {
    throw ApiError.notFound("Không tìm thấy thực vật để xóa");
  }

  // Chặn xóa nếu còn mục con để bảo vệ cấu trúc ltree
  if (taxon.children.length > 0) {
    throw ApiError.badRequest(
      "Không thể xóa vì mục này đang chứa các mục con. Vui lòng xóa hoặc di chuyển các mục con trước.",
    );
  }

  // 1. Thực hiện xóa trong Database trước
  const result = await prisma.taxon.delete({
    where: { id },
  });

  // 2. Chỉ sau khi xóa DB thành công mới dọn dẹp ảnh vật lý trên R2 (Async)
  // Sử dụng dynamic import để tránh circular dependency giữa các service
  import("./taxonImage.service.js").then(m => {
    m.deletePhysicalImagesByTaxonId(id).catch((err: any) => {
      console.error(`[Cleanup] Failed to delete physical images for taxon ${id} after DB delete:`, err);
    });
  }).catch((err: any) => {
    console.error(`[Cleanup] Failed to import taxonImageService for cleanup:`, err);
  });

  return result;
}

// Lấy chi tiết một Taxon theo slug cùng tất cả quan hệ
export async function findBySlug(slug: string, userId?: string) {
  const taxon = await prisma.taxon.findUnique({
    where: {
      slug,
      status: "published", // Bảo mật: Không cho phép xem dữ liệu nháp
    },
    include: {
      synonyms: true,
      commonNames: true,
      images: {
        where: { status: "approved" },
        orderBy: { sortOrder: "asc" },
      },
      provinces: {
        include: { province: true },
      },
    },
  });

  if (!taxon) {
    throw ApiError.notFound("Không tìm thấy thực vật này");
  }

  // Chạy song song: children và bookmark không phụ thuộc nhau
  const [children, bookmark] = await Promise.all([
    prisma.taxon.findMany({
      where: {
        parentId: taxon.id,
        status: "published",
      },
      select: {
        id: true,
        scientificName: true,
        canonicalName: true,
        vietnameseName: true,
        slug: true,
        rank: true,
        author: true,
      },
      orderBy: { scientificName: "asc" },
    }),
    userId
      ? prisma.bookmark.findUnique({
          where: { userId_taxonId: { userId, taxonId: taxon.id } },
        })
      : Promise.resolve(null),
  ]);

  return {
    ...taxon,
    children,
    isBookmarked: !!bookmark,
  };
}

// Lấy đường dẫn phả hệ (Breadcrumb) từ gốc đến taxon hiện tại
// Sử dụng ltree operator: path <@ 'current.path'
export async function getBreadcrumb(slug: string) {
  // Vì path là kiểu ltree (Unsupported), ta dùng queryRaw để lấy nó ra
  const target: any[] = await prisma.$queryRaw`
    SELECT path::text FROM taxon WHERE slug = ${slug} LIMIT 1
  `;

  if (!target || target.length === 0 || !target[0].path) return [];

  const targetPath = target[0]?.path;

  // Truy vấn tất cả tổ tiên dựa trên ltree path
  // path @> 'A.B.C' trả về A, A.B, A.B.C (Những thằng là cha/ông của nốt hiện tại)
  const breadcrumb = await prisma.$queryRaw`
    SELECT id, slug, canonical_name as "canonicalName", rank, path::text
    FROM taxon
    WHERE path @> ${targetPath}::ltree
    AND status = 'published'
    ORDER BY path ASC
  `;

  return breadcrumb;
}


