import { Router } from "express";
import { requireAuth, authorize } from "../auth/auth.middleware.js";
import * as adminStatsController from "./admin.controller.js";
import * as adminTaxonController from "../taxon/adminTaxon.controller.js";
import * as adminUserController from "../user/adminUser.controller.js";
import * as taxonImageController from "../taxon/taxonImage.controller.js";
import { memoryUpload } from "../../middlewares/upload.js";

const adminRoutes = Router();

// Toàn bộ các route bên dưới yêu cầu Đăng nhập và quyền Admin
adminRoutes.use(requireAuth, authorize("admin"));

// Statistics & Activity
adminRoutes.get("/stats", adminStatsController.getStats);

// Taxon Management
adminRoutes.get("/taxa", adminTaxonController.listTaxa);
adminRoutes.post("/taxa", memoryUpload.array("files"), adminTaxonController.createTaxon);
adminRoutes.patch("/taxa/:id", memoryUpload.array("files"), adminTaxonController.updateTaxon);
adminRoutes.get("/taxa/:id", adminTaxonController.getTaxon);
adminRoutes.delete("/taxa/:id", adminTaxonController.deleteTaxon);

// User Management
adminRoutes.get("/users", adminUserController.listUsers);
adminRoutes.post("/users", adminUserController.createUser);
adminRoutes.patch("/users/:id/role", adminUserController.updateRole);
adminRoutes.patch("/users/:id/status", adminUserController.updateStatus);
adminRoutes.delete("/users/:id", adminUserController.deleteUser);

// Image Moderation (Chuyển sang group admin cho nhất quán)
adminRoutes.get("/images/pending", taxonImageController.getPendingImages);
adminRoutes.patch("/images/:id/review", taxonImageController.reviewImage);
adminRoutes.delete("/images/:id", taxonImageController.deleteImage);

export { adminRoutes };

