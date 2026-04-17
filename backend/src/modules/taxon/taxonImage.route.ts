import { Router } from "express";
import * as taxonImageController from "./taxonImage.controller.js";
import { requireAuth, authorize } from "../auth/auth.middleware.js";
import { memoryUpload } from "../../middlewares/upload.js";

const router = Router();

/**
 * @route   POST /api/v1/taxa/images/contribute
 * @desc    Người dùng đóng góp ảnh cho một loài
 * @access  Private
 */
router.post(
  "/contribute",
  requireAuth,
  memoryUpload.single("image"),
  taxonImageController.contributeImage
);

/**
 * @route   POST /api/v1/taxa/images/:id/like
 * @desc    Thả tim/Bỏ tim cho ảnh người dùng
 * @access  Private
 */
router.post(
  "/:id/like",
  requireAuth,
  taxonImageController.toggleLike
);

/**
 * @route   GET /api/v1/taxa/images/me
 * @desc    Lấy danh sách ảnh do chính người dùng hiện tại đóng góp
 * @access  Private
 */
router.get(
  "/me",
  requireAuth,
  taxonImageController.getMyContributions
);

/**
 * @route   GET /api/v1/taxa/images/me/stats
 * @desc    Lấy thống kê đóng góp của cá nhân
 * @access  Private
 */
router.get(
  "/me/stats",
  requireAuth,
  taxonImageController.getMyStats
);

/**
 * @route   GET /api/v1/taxa/images/pending
 * @desc    Lấy danh sách ảnh chờ duyệt (Chỉ Admin)
 * @access  Private (Admin)
 */
router.get(
  "/pending",
  authorize("admin"),
  taxonImageController.getPendingImages
);

/**
 * @route   POST /api/v1/taxa/images/:id/review
 * @desc    Duyệt hoặc từ chối ảnh (Chỉ Admin)
 * @access  Private (Admin)
 */
router.post(
  "/:id/review",
  authorize("admin"),
  taxonImageController.reviewImage
);

/**
 * @route   DELETE /api/v1/taxa/images/:id
 * @desc    Xóa ảnh (Chỉ Admin)
 * @access  Private (Admin)
 */
router.delete(
  "/:id",
  authorize("admin"),
  taxonImageController.deleteImage
);

export default router;

