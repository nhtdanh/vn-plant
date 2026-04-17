import { Router } from "express";
import * as bookmarkController from "./bookmark.controller";
import { requireAuth } from "../auth/auth.middleware";

const router = Router();

// Tất cả các route bookmark đều yêu cầu đăng nhập
router.use(requireAuth);

router.get("/", bookmarkController.listBookmarks);
router.post("/", bookmarkController.addBookmark);
router.delete("/:taxonId", bookmarkController.removeBookmark);

export { router as bookmarkRoutes };
