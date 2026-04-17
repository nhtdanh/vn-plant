import { z } from "zod";

/**
 * Base pagination schema - can be extended
 */
const basePaginationQuerySchema = z.object({
  limit: z
    .preprocess((val) => Number(val), z.number().int().min(1).max(100))
    .default(20),
  page: z.preprocess((val) => Number(val), z.number().int().min(1)).optional(),
  offset: z
    .preprocess((val) => Number(val), z.number().int().min(0))
    .optional(),
});

/**
 * Helper function to convert page to offset
 */
export function toPaginationQuery(
  data: z.infer<typeof basePaginationQuerySchema>,
) {
  // If page is provided, convert it to offset
  if (data.page !== undefined) {
    return {
      limit: data.limit,
      offset: (data.page - 1) * data.limit,
    };
  }

  // Otherwise use offset directly (default to 0)
  return {
    limit: data.limit,
    offset: data.offset ?? 0,
  };
}

/**
 * Shared schema for paginated queries.
 * Use this in controllers to parse limit and offset from query parameters.
 * Supports both "offset" and "page" (page is converted to offset: offset = (page - 1) * limit)
 */
export const paginationQuerySchema = basePaginationQuerySchema;

export type PaginationQuery = ReturnType<typeof toPaginationQuery>;
