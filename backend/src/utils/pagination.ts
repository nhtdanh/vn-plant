/**
 * Utility for unified pagination across the application.
 */

export interface PaginationParams {
  take: number;
  skip: number;
}

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  meta: PaginationMeta;
}

/**
 * Converts limit and offset (or page) to Prisma's take and skip.
 * Handles defaults and edge cases.
 * Supports both:
 * - offset/limit params (traditional)
 * - page/limit params (converts page to offset)
 */
export function getPaginationParams(query: {
  limit?: number | undefined;
  offset?: number | undefined;
  page?: number | undefined;
}): PaginationParams {
  const limit = Math.max(1, Math.min(100, Number(query.limit) || 20));

  // If page is provided, convert to offset
  let offset = 0;
  if (
    query.page !== undefined &&
    typeof query.page === "number" &&
    query.page > 0
  ) {
    offset = (query.page - 1) * limit;
  } else {
    offset = Math.max(0, Number(query.offset) || 0);
  }

  return {
    take: limit,
    skip: offset,
  };
}

/**
 * Formats data and counts into a standard paginated response.
 */
export function formatPaginatedResponse<T>(
  items: T[],
  total: number,
  params: PaginationParams,
): PaginatedResponse<T> {
  const { take: limit, skip: offset } = params;
  const page = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  return {
    items,
    meta: {
      total,
      page,
      limit,
      totalPages,
    },
  };
}
