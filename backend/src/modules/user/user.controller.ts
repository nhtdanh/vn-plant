import type { Request, Response, NextFunction } from "express";
import * as userService from "./user.service.js";
import * as taxonImageService from "../taxon/taxonImage.service.js";
import { updateProfileSchema } from "./user.dto.js";
import { sendSuccess } from "../../utils/apiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiError } from "../../utils/apiError.js";
import { paginationQuerySchema } from "../../common/pagination.dto.js";
import { getPaginationParams } from "../../utils/pagination.js";

export const getMe = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const userId = (req as any).user?.id || (req as any).user?.userId;
  if (!userId) throw ApiError.unauthorized();

  const [profile, contributionStats] = await Promise.all([
    userService.getProfile(userId),
    taxonImageService.getUserContributionStats(userId)
  ]);

  sendSuccess(res, {
    ...profile,
    contributionStats
  });
});

export const getMyContributions = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const userId = (req as any).user?.id || (req as any).user?.userId;
  if (!userId) throw ApiError.unauthorized();

  const query = paginationQuerySchema.parse(req.query);
  const pagination = getPaginationParams(query);

  const result = await taxonImageService.findByContributor(userId, pagination);
  sendSuccess(res, result);
});

export const updateMe = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const userId = (req as any).user?.id || (req as any).user?.userId;
  if (!userId) throw ApiError.unauthorized();

  const data = updateProfileSchema.parse(req.body);
  const result = await userService.updateProfile(userId, data);

  sendSuccess(res, result, "Cập nhật hồ sơ thành công");
});

export const uploadAvatar = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const userId = (req as any).user?.id || (req as any).user?.userId;
  if (!userId) throw ApiError.unauthorized();

  if (!(req as any).file) {
    throw ApiError.badRequest("Thiếu tệp ảnh");
  }

  const result = await userService.updateAvatar(
    userId,
    (req as any).file.buffer
  );

  sendSuccess(res, result, "Cập nhật ảnh đại diện thành công");
});

