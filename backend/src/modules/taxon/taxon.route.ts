import { Router } from "express";
import * as taxonController from "./taxon.controller.js";

const router = Router();

router.get("/", taxonController.getTaxa);
router.get("/metadata", taxonController.getMetadata);
router.get("/provinces", taxonController.getProvinces);
router.get("/autocomplete", taxonController.getSuggestions);
router.get("/:id/ancestors", taxonController.getAncestors);
router.get("/:id/related", taxonController.getRelatedTaxa);
router.get("/:slug", taxonController.getTaxonDetail);

export default router;

