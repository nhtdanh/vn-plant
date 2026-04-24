import { Router } from "express";
import * as taxonImageController from "./taxonImage.controller.js";
import { requireAuth, authorize } from "../auth/auth.middleware.js";
import { memoryUpload } from "../../middlewares/upload.js";

const router = Router();

// Người dùng đóng góp ảnh cho một loài
router.post(
  "/contribute",
  requireAuth,
  memoryUpload.single("image"),
  taxonImageController.contributeImage
);

// Thả tim/Bỏ tim cho ảnh người dùng
router.post(
  "/:id/like",
  requireAuth,
  taxonImageController.toggleLike
);

// Lấy danh sách ảnh do chính người dùng hiện tại đóng góp
router.get(
  "/me",
  requireAuth,
  taxonImageController.getMyContributions
);

// Lấy thống kê đóng góp của cá nhân
router.get(
  "/me/stats",
  requireAuth,
  taxonImageController.getMyStats
);


export default router;

