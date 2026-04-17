import type { Request, Response, NextFunction } from "express";
import * as bookmarkService from "./bookmark.service";
import { addBookmarkSchema, listBookmarksQuerySchema } from "./bookmark.dto";
import { sendSuccess, sendCreated } from "../../utils/apiResponse";
import { asyncHandler } from "../../utils/asyncHandler";
import { ApiError } from "../../utils/apiError";

export const addBookmark = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const userId = (req as any).user?.id || (req as any).user?.userId;
  if (!userId) throw ApiError.unauthorized();

  const data = addBookmarkSchema.parse(req.body);
  const result = await bookmarkService.addBookmark(userId, data.taxonId);

  sendCreated(res, result, "Đã thêm vào danh sách yêu thích");
});

export const removeBookmark = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const userId = (req as any).user?.id || (req as any).user?.userId;
  if (!userId) throw ApiError.unauthorized();

  const taxonId = Number((req as any).params.taxonId);
  await bookmarkService.removeBookmark(userId, taxonId);

  sendSuccess(res, null, "Đã xóa khỏi danh sách yêu thích");
});

export const listBookmarks = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const userId = (req as any).user?.id || (req as any).user?.userId;
  if (!userId) throw ApiError.unauthorized();

  const query = listBookmarksQuerySchema.parse(req.query);
  const result = await bookmarkService.listBookmarks(userId, query);

  sendSuccess(res, result);
});
