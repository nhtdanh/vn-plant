import type { Request, Response, NextFunction } from "express";
import * as adminService from "./admin.service";
import { sendSuccess } from "../../utils/apiResponse";
import { asyncHandler } from "../../utils/asyncHandler";

export const getStats = asyncHandler(async (_req: Request, res: Response, _next: NextFunction) => {
  const stats = await adminService.getSystemStats();
  sendSuccess(res, stats);
});


