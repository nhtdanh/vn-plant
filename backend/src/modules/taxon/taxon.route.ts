import { Router } from "express";
import * as taxonController from "./taxon.controller.js";

const router = Router();

/**
 * @route   GET /api/v1/taxa
 */
router.get("/", taxonController.getTaxa);

/**
 * @route   GET /api/v1/taxa/metadata
 */
router.get("/metadata", taxonController.getMetadata);

/**
 * @route   GET /api/v1/taxa/provinces
 */
router.get("/provinces", taxonController.getProvinces);

/**
 * @route   GET /api/v1/taxa/autocomplete
 */
router.get("/autocomplete", taxonController.getSuggestions);

/**
 * @route   GET /api/v1/taxa/:id/ancestors
 */
router.get("/:id/ancestors", taxonController.getAncestors);

/**
 * @route   GET /api/v1/taxa/:id/related
 */
router.get("/:id/related", taxonController.getRelatedTaxa);

/**
 * @route   GET /api/v1/taxa/:slug
 */
router.get("/:slug", taxonController.getTaxonDetail);

export default router;

