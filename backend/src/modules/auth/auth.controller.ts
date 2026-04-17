import type { Request, Response } from "express";
import * as authService from "./auth.service.js";
import { sendSuccess, sendCreated } from "../../utils/apiResponse.js";
import { ApiError } from "../../utils/apiError.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { REFRESH_EXPIRES_IN, getDurationMs } from "../../config/auth-config.js";

export const register = asyncHandler(async (req: Request, res: Response) => {
  const userAgent = req.get("User-Agent");
  const { refreshToken, ...result } = await authService.register(req.body, userAgent);

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env["NODE_ENV"] === "production",
    sameSite: "lax",
    maxAge: getDurationMs(REFRESH_EXPIRES_IN),
  });

  sendCreated(res, result, "Đăng ký thành công");
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  const userAgent = req.get("User-Agent");
  const { refreshToken, ...result } = await authService.login(req.body, userAgent);

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env["NODE_ENV"] === "production",
    sameSite: "lax",
    maxAge: getDurationMs(REFRESH_EXPIRES_IN),
  });

  sendSuccess(res, result, "Đăng nhập thành công");
});

export const refresh = asyncHandler(async (req: Request, res: Response) => {
  const refreshToken = req.cookies["refreshToken"];
  if (!refreshToken) {
    throw ApiError.unauthorized("Không tìm thấy refresh token");
  }

  const { accessToken } = await authService.refreshToken(refreshToken);
  sendSuccess(res, { accessToken });
});

export const logout = asyncHandler(async (req: Request, res: Response) => {
  const refreshToken = req.cookies["refreshToken"];
  if (refreshToken) {
    await authService.logout(refreshToken);
  }

  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: process.env["NODE_ENV"] === "production",
    sameSite: "lax",
  });
  sendSuccess(res, null, "Đăng xuất thành công");
});

