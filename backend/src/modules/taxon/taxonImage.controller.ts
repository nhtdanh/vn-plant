import type { Request, Response } from "express";
import * as taxonImageService from "./taxonImage.service.js";
import { contributeImageSchema, reviewImageSchema, taxonImageIdSchema } from "./taxonImage.dto.js";
import { sendSuccess, sendCreated } from "../../utils/apiResponse.js";
import { ApiError } from "../../utils/apiError.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { paginationQuerySchema } from "../../common/pagination.dto.js";
import { getPaginationParams } from "../../utils/pagination.js";

// Người dùng đóng góp ảnh
export const contributeImage = asyncHandler(async (req: Request, res: Response) => {
  if (!req.file) {
    throw ApiError.badRequest("Vui lòng tải lên một file hình ảnh");
  }

  const data = contributeImageSchema.parse(req.body);
  const userPayload = req.user;

  if (!userPayload) {
    throw ApiError.unauthorized("Bạn cần đăng nhập để đóng góp ảnh");
  }

  const result = await taxonImageService.contributeImage({
    taxonId: data.taxonId,
    fileBuffer: req.file.buffer,
    fileName: req.file.originalname,
    contentType: req.file.mimetype,
    contributorId: userPayload.userId,
    caption: data.caption,
    author: data.author,
    license: data.license,
  });

  sendCreated(res, result, "Gửi đóng góp ảnh thành công, vui lòng chờ Admin duyệt");
});

// Lấy danh sách ảnh phê duyệt (Chỉ Admin)
export const getPendingImages = asyncHandler(async (req: Request, res: Response) => {
  const query = paginationQuerySchema.parse(req.query);
  const status = req.query['status'] as any; // Cast to status enum
  const pagination = getPaginationParams(query);
  
  const result = await taxonImageService.getPendingImages(pagination, status);
  sendSuccess(res, result);
});

// Duyệt/Từ chối ảnh (Chỉ Admin)
export const reviewImage = asyncHandler(async (req: Request, res: Response) => {
  const { id } = taxonImageIdSchema.parse(req.params);
  const data = reviewImageSchema.parse(req.body);
  const userPayload = req.user;

  if (!userPayload) {
    throw ApiError.unauthorized("Không xác định được danh tính người duyệt");
  }

  const result = await taxonImageService.reviewImage(id, userPayload.userId, data);
  
  const message = data.status === "approved" ? "Đã duyệt ảnh thành công" : "Đã từ chối ảnh";
  sendSuccess(res, result, message);
});

// Thả tim/Bỏ tim (Phí người dùng)
export const toggleLike = asyncHandler(async (req: Request, res: Response) => {
  const { id } = taxonImageIdSchema.parse(req.params);
  const userPayload = req.user;

  if (!userPayload) {
    throw ApiError.unauthorized("Bạn cần đăng nhập để thả tim");
  }

  const result = await taxonImageService.toggleLike(userPayload.userId, id);
  const message = result.liked ? "Đã thả tim ảnh" : "Đã bỏ tim ảnh";
  sendSuccess(res, result, message);
});

// Lấy danh sách đóng góp của tôi
export const getMyContributions = asyncHandler(async (req: Request, res: Response) => {
  const userPayload = req.user;
  if (!userPayload) {
    throw ApiError.unauthorized("Bạn cần đăng nhập để xem đóng góp");
  }

  const query = paginationQuerySchema.parse(req.query);
  const pagination = getPaginationParams(query);
  
  const result = await taxonImageService.findByContributor(userPayload.userId, pagination);
  sendSuccess(res, result);
});

// Lấy thống kê đóng góp của tôi
export const getMyStats = asyncHandler(async (req: Request, res: Response) => {
  const userPayload = req.user;
  if (!userPayload) {
    throw ApiError.unauthorized("Bạn cần đăng nhập để xem thống kê");
  }

  const result = await taxonImageService.getUserContributionStats(userPayload.userId);
  sendSuccess(res, result);
});

// Xóa ảnh (Chỉ Admin)
export const deleteImage = asyncHandler(async (req: Request, res: Response) => {
  const { id } = taxonImageIdSchema.parse(req.params);
  const result = await taxonImageService.deleteImage(id);
  sendSuccess(res, result, "Đã xóa ảnh thành công");
});

