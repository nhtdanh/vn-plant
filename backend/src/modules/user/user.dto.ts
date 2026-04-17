import { z } from "zod";

export const updateProfileSchema = z.object({
  displayName: z.string().min(2, "Tên hiển thị phải có ít nhất 2 ký tự").max(50, "Tên hiển thị tối đa 50 ký tự").optional(),
});

export const userRoleSchema = z.enum(["admin", "editor", "user"]);
export const userStatusSchema = z.enum(["active", "inactive"]);

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
export type UserRoleInput = z.infer<typeof userRoleSchema>;
export type UserStatusInput = z.infer<typeof userStatusSchema>;
