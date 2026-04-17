import { Router } from "express";
import { authRoutes } from "../modules/auth";
import { taxonRoutes, taxonImageRoutes } from "../modules/taxon";
import { bookmarkRoutes } from "../modules/bookmark";
import { userRoutes } from "../modules/user";
import { adminRoutes } from "../modules/admin/admin.route";

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
