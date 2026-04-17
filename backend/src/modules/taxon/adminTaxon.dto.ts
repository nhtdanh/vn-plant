import { z } from "zod";
import { taxonRankSchema, plantGroupSchema, toArray } from "./taxon.dto";
import { paginationQuerySchema } from "../../common/pagination.dto";

export const taxonStatusSchema = z.enum(["draft", "published", "archived"]);

// Schema cho liên kết ảnh (Nếu gửi URL trực tiếp hoặc metadata cục bộ chưa up)
export const taxonImageInputSchema = z.object({
  url: z.string(), // Nới lỏng từ .url() thành string để hỗ trợ "uploading" hoặc placeholder an toàn
  caption: z.string().optional(),
  isPrimary: z.boolean().default(false),
  author: z.string().optional(),
  license: z.string().optional(),
});

// Schema cho tên thường gọi
export const commonNameInputSchema = z.object({
  name: z.string().min(1),
  language: z.string().default("vi"),
  isPrimary: z.boolean().default(false),
  regionNote: z.string().optional(),
});

// Schema cho tên đồng nghĩa
export const synonymInputSchema = z.object({
  scientificName: z.string().min(1),
  sourceName: z.string().optional(),
  externalId: z.string().optional(),
});

export const createTaxonSchema = z.object({
  scientificName: z.string().min(1, "Tên khoa học không được để trống"),
  canonicalName: z.string().optional(),
  vietnameseName: z.string().optional(),
  rank: taxonRankSchema,
  status: taxonStatusSchema.default("draft"),
  plantGroup: plantGroupSchema.optional(),
  parentId: z.preprocess((val) => (val ? Number(val) : undefined), z.number().int().optional()),
  hasVietnamRecord: z.boolean().default(false),
  
  // Morphological Fields
  habit: z.string().optional(),
  leaf: z.string().optional(),
  reproduction: z.string().optional(),
  phenology: z.string().optional(),
  value: z.string().optional(),
  distributionText: z.string().optional(),
  note: z.string().optional(),
  
  // Metadata
  author: z.string().optional(),
  orderInBook: z.string().optional(),
  description: z.string().optional(),
  descriptionLang: z.string().default("vi"),
  rawDescriptionInBook: z.string().optional(),
  sourceName: z.string().optional(),

  // Nested Relations (Hỗ trợ parse từ chuỗi JSON nếu gửi qua Multipart)
  synonyms: z.preprocess(
    (val) => (typeof val === "string" ? JSON.parse(val) : val),
    z.array(synonymInputSchema).optional().default([])
  ),
  commonNames: z.preprocess(
    (val) => (typeof val === "string" ? JSON.parse(val) : val),
    z.array(commonNameInputSchema).optional().default([])
  ),
  images: z.preprocess(
    (val) => (typeof val === "string" ? JSON.parse(val) : val),
    z.array(taxonImageInputSchema).optional().default([])
  ),
  
  // Danh sách ID tỉnh thành phân bố
  provinceIds: z.preprocess(
    (val) => (typeof val === "string" ? JSON.parse(val) : val),
    z.array(z.number()).optional().default([])
  ),
  
  // Danh sách ID ảnh cần xóa (Chỉ dùng cho update)
  deleteImageIds: z.preprocess(
    (val) => (typeof val === "string" ? JSON.parse(val) : val),
    z.array(z.number()).optional().default([])
  ),
});

export const updateTaxonSchema = createTaxonSchema.partial().extend({
  synonyms: z.preprocess(
    (val) => (typeof val === "string" ? JSON.parse(val) : val),
    z.array(synonymInputSchema).optional()
  ),
  commonNames: z.preprocess(
    (val) => (typeof val === "string" ? JSON.parse(val) : val),
    z.array(commonNameInputSchema).optional()
  ),
  images: z.preprocess(
    (val) => (typeof val === "string" ? JSON.parse(val) : val),
    z.array(taxonImageInputSchema).optional()
  ),
  provinceIds: z.preprocess(
    (val) => (typeof val === "string" ? JSON.parse(val) : val),
    z.array(z.number()).optional()
  ),
});

export const adminTaxaQuerySchema = paginationQuerySchema.extend({
  status: taxonStatusSchema.optional(),
  rank: z.preprocess(toArray, z.array(taxonRankSchema).optional()),
  plantGroup: z.preprocess(toArray, z.array(plantGroupSchema).optional()),
  hasImage: z.preprocess((val) => {
    if (val === 'true' || val === true) return true;
    if (val === 'false' || val === false) return false;
    return undefined;
  }, z.boolean().optional()),
  hasDescription: z.preprocess((val) => {
    if (val === 'true' || val === true) return true;
    if (val === 'false' || val === false) return false;
    return undefined;
  }, z.boolean().optional()),
  q: z.string().optional(),
});

export type CreateTaxonInput = z.infer<typeof createTaxonSchema>;
export type UpdateTaxonInput = z.infer<typeof updateTaxonSchema>;
export type AdminTaxaQuery = z.infer<typeof adminTaxaQuerySchema>;
