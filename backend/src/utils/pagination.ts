// tiện ích phân trang thống nhất cho toàn bộ ứng dụng

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

// chuyển đổi limit và offset (hoặc page) sang take và skip của prisma
// xử lý mặc định và các trường hợp biên
// hỗ trợ cả offset/limit (truyền thống) và page/limit (chuyển đổi page sang offset)
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

// định dạng dữ liệu và số lượng thành phản hồi phân trang tiêu chuẩn
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
