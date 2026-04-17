import { Router } from "express";
import { authRoutes } from "../modules/auth/index.js";
import { taxonRoutes, taxonImageRoutes } from "../modules/taxon/index.js";
import { bookmarkRoutes } from "../modules/bookmark/index.js";
import { userRoutes } from "../modules/user/index.js";
import { adminRoutes } from "../modules/admin/admin.route.js";

const router = Router();

// health check
router.get("/health", (_req, res) => {
  res.json({ success: true, message: "OK" });
});

// mount routes
router.use("/auth", authRoutes);
router.use("/taxa", taxonRoutes);
router.use("/taxa/images", taxonImageRoutes);
router.use("/bookmarks", bookmarkRoutes);
router.use("/users", userRoutes);
router.use("/admin", adminRoutes);
// router.use("/contributions", contributionRoutes);
// router.use("/regions", regionRoutes);

export { router };
