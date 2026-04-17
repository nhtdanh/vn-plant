import type { Request, Response, NextFunction } from "express";
import * as taxonService from "./taxon.service";
import { 
  getTaxaQuerySchema, 
  taxonSlugSchema, 
  getSuggestionsQuerySchema,
  taxonIdParamsSchema
} from "./taxon.dto";
import { sendSuccess } from "../../utils/apiResponse";
import { asyncHandler } from "../../utils/asyncHandler";

export const getTaxa = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const query = getTaxaQuerySchema.parse(req.query);
  const result = await taxonService.findAll(query);
  sendSuccess(res, result);
});

export const getTaxonDetail = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const { slug } = taxonSlugSchema.parse(req.params);
  const userId = (req as any).user?.id || (req as any).user?.userId;
  const taxon = await taxonService.findBySlug(slug, userId);
  sendSuccess(res, taxon);
});

export const getSuggestions = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const { q, limit } = getSuggestionsQuerySchema.parse(req.query);
  const suggestions = await taxonService.suggestTaxa(q, limit);
  sendSuccess(res, suggestions);
});

export const getAncestors = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const { id } = taxonIdParamsSchema.parse(req.params);
  const ancestors = await taxonService.getAncestors(id);
  sendSuccess(res, ancestors);
});

export const getMetadata = asyncHandler(async (_req: Request, res: Response, _next: NextFunction) => {
  const metadata = await taxonService.getMetadata();
  sendSuccess(res, metadata);
});

export const getProvinces = asyncHandler(async (_req: Request, res: Response, _next: NextFunction) => {
  const provinces = await taxonService.getProvinces();
  sendSuccess(res, provinces);
});

export const getRelatedTaxa = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const { id } = taxonIdParamsSchema.parse(req.params);
  const related = await taxonService.getRelatedTaxa(id);
  sendSuccess(res, related);
});
