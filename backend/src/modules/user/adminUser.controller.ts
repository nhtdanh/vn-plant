import type { Request, Response, NextFunction } from "express";
import * as userService from "./user.service.js";
import { sendSuccess } from "../../utils/apiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { z } from "zod";
import { paginationQuerySchema } from "../../common/pagination.dto.js";
import { getPaginationParams } from "../../utils/pagination.js";

import { userRoleSchema, userStatusSchema } from "./user.dto.js";

export const listUsers = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const querySchema = paginationQuerySchema.extend({
    role: userRoleSchema.optional(),
    q: z.string().optional(),
  });

  const query = querySchema.parse(req.query);
  const pagination = getPaginationParams(query);
  
  const result = await userService.listAllUsers(
    pagination,
    query.role,
    query.q
  );
  sendSuccess(res, result);
});

export const updateRole = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const { id } = req.params;
  const roleSchema = z.object({
    role: userRoleSchema,
  });

  const { role } = roleSchema.parse(req.body);
  const user = await userService.updateUserRole(id as string, role);
  sendSuccess(res, user, "Cập nhật quyền hạn thành công");
});

export const updateStatus = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const { id } = req.params;
  const statusSchema = z.object({
    status: userStatusSchema,
  });

  const { status } = statusSchema.parse(req.body);
  const user = await userService.updateUserStatus(id as string, status);
  sendSuccess(res, user, "Cập nhật trạng thái thành công");
});

export const createUser = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const createUserSchema = z.object({
    email: z.string().email("Email không hợp lệ"),
    password: z.string().min(6, "Mật khẩu phải từ 6 ký tự"),
    displayName: z.string().optional(),
  });

  const data = createUserSchema.parse(req.body);
  const user = await userService.adminCreateUser({
    email: data.email,
    passwordHash: data.password, // This will be hashed in the service
    displayName: data.displayName ?? null,
  });

  sendSuccess(res, user, "Tạo tài khoản thành công", 201);
});

