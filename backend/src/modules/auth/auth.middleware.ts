import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ApiError } from "../../utils/apiError.js";
import { JWT_SECRET } from "../../config/auth-config.js";
import type { AuthPayload } from "./auth.types.js";
import type { UserRole } from "../user/user.types.js";

function verifyToken(token: string): AuthPayload {
  const decoded = jwt.verify(token, JWT_SECRET, {
    algorithms: ["HS256"],
  });

  if (
    typeof decoded !== "object" ||
    !decoded ||
    !("userId" in decoded) ||
    !("role" in decoded)
  ) {
    throw new Error("Invalid token payload");
  }

  return decoded as AuthPayload;
}

export async function requireAuth(req: Request, _res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    return next(ApiError.unauthorized("Vui lòng đăng nhập"));
  }

  try {
    const token = header.slice(7);
    const payload = verifyToken(token);
    
    // kiểm tra trạng thái người dùng trong database (chống khóa tài khoản vẫn dùng được jwt)
    const { prisma } = await import("../../config/prisma.js");
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: { status: true }
    });

    if (!user || user.status === "inactive") {
      return next(ApiError.forbidden("Tài khoản đã bị khóa hoặc không tồn tại"));
    }

    req.user = payload;
    next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      return next(ApiError.unauthorized("Token đã hết hạn"));
    }
    return next(ApiError.unauthorized("Token không hợp lệ"));
  }
}

export function optionalAuth(req: Request, _res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    return next();
  }

  try {
    const token = header.slice(7);
    req.user = verifyToken(token);
  } catch (err) {
    // bỏ qua lỗi token trong optional auth
  }
  next();
}

export function authorize(...roles: UserRole[]) {
  return (req: Request, _res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(ApiError.unauthorized("Vui lòng đăng nhập"));
    }
    if (!roles.includes(req.user.role as UserRole)) {
      return next(ApiError.forbidden("Không đủ quyền hạn"));
    }
    next();
  };
}

