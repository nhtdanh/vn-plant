import { Router } from "express";

const router = Router();

// health check
router.get("/health", (_req, res) => {
  res.json({ success: true, message: "OK" });
});

// mount routes (sẽ thêm sau)
// router.use("/auth", authRoutes);
// router.use("/taxon", taxonRoutes);
// router.use("/bookmarks", bookmarkRoutes);
// router.use("/contributions", contributionRoutes);
// router.use("/regions", regionRoutes);

export { router };
