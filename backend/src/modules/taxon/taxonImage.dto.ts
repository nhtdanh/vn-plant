import { z } from "zod";

export const imageStatusSchema = z.enum(["pending", "approved", "rejected"]);

export const contributeImageSchema = z.object({
  taxonId: z.preprocess((val) => Number(val), z.number().int()),
  caption: z.string().optional(),
  author: z.string().optional(),
  license: z.string().optional(),
  isPrimaryCandidate: z.preprocess((val) => val === "true" || val === true, z.boolean()).optional().default(false),
});

export const reviewImageSchema = z.object({
  status: imageStatusSchema,
  recordNote: z.string().optional(),
  isPrimary: z.boolean().optional().default(false),
  sortOrder: z.number().int().optional(),
});

export const taxonImageIdSchema = z.object({
  id: z.preprocess((val) => Number(val), z.number().int()),
});
