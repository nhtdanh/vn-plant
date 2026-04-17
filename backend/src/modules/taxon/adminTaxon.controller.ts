import type { Request, Response, NextFunction } from "express";
import * as taxonService from "./taxon.service.js";
import { createTaxonSchema, updateTaxonSchema, adminTaxaQuerySchema } from "./adminTaxon.dto.js";
import { sendSuccess, sendCreated } from "../../utils/apiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

export const listTaxa = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const query = adminTaxaQuerySchema.parse(req.query);
  const result = await taxonService.findAllAdmin(query);
  sendSuccess(res, result);
});

export const createTaxon = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  // Multipart form-data thường gửi JSON qua trường "data"
  const bodyData = typeof req.body.data === "string" ? JSON.parse(req.body.data) : req.body;
  const data = createTaxonSchema.parse(bodyData);
  const files = req.files as Express.Multer.File[];
  
  const taxon = await taxonService.createTaxon(data, files);
  sendCreated(res, taxon, "Tạo thực vật mới thành công");
});

export const updateTaxon = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const id = Number(req.params["id"]);
  // Multipart form-data thường gửi JSON qua trường "data"
  const bodyData = typeof req.body.data === "string" ? JSON.parse(req.body.data) : req.body;
  const data = updateTaxonSchema.parse(bodyData);
  const files = req.files as Express.Multer.File[];
  
  const taxon = await taxonService.updateTaxon(id, data, files);
  sendSuccess(res, taxon, "Cập nhật thành công");
});

export const getTaxon = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const id = Number(req.params["id"]);
  const taxon = await taxonService.findByIdAdmin(id);
  sendSuccess(res, taxon);
});

export const deleteTaxon = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const id = Number(req.params["id"]);
  await taxonService.deleteTaxon(id);
  sendSuccess(res, null, "Xóa thành công");
});

