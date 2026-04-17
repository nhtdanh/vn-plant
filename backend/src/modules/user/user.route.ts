import { Router } from "express";
import * as userController from "./user.controller";
import { requireAuth } from "../auth/auth.middleware";
import { memoryUpload } from "../../middlewares/upload";

const router = Router();

// Tất cả các route user đều yêu cầu đăng nhập
router.use(requireAuth);

router.get("/me", userController.getMe);
router.get("/me/contributions", userController.getMyContributions);
router.patch("/me", userController.updateMe);
router.post("/me/avatar", memoryUpload.single("avatar"), userController.uploadAvatar);

export { router as userRoutes };
