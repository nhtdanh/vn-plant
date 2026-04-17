import { z } from "zod";
import { paginationQuerySchema } from "../../common/pagination.dto.js";

export const taxonRankSchema = z.enum([
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
]);

export const plantGroupSchema = z.enum(["angiosperm", "gymnosperm", "fern"]);

export const toArray = (val: unknown) => {
  if (!val) return undefined;
  if (Array.isArray(val)) return val;
  if (typeof val === "string") return val.split(",").map((s) => s.trim());
  return [val];
};

export const getTaxaQuerySchema = paginationQuerySchema.extend({
  rank: z.preprocess(toArray, z.array(taxonRankSchema).optional()),
  group: z.preprocess(toArray, z.array(plantGroupSchema).optional()),
  parentId: z.preprocess(
    (val) => (val ? Number(val) : undefined),
    z.number().int().optional(),
  ),
  q: z.string().min(1).optional(), // search query
  province: z.preprocess(toArray, z.array(z.string().min(1)).optional()),
});

export const getSuggestionsQuerySchema = z.object({
  q: z.string().min(1),
  limit: z
    .preprocess((val) => Number(val), z.number().int().min(1).max(20))
    .default(5),
});

export const taxonSlugSchema = z.object({
  slug: z
    .string()
    .min(1)
    .regex(
      /^[a-z0-9-]+$/,
      "Slug chỉ được chứa chữ thường, số và dấu gạch ngang",
    ),
});

export const taxonIdParamsSchema = z.object({
  id: z.preprocess((val) => Number(val), z.number().int().positive()),
});

export type GetTaxaQuery = z.infer<typeof getTaxaQuerySchema>;
export type TaxonSlugParams = z.infer<typeof taxonSlugSchema>;
export type TaxonIdParams = z.infer<typeof taxonIdParamsSchema>;

