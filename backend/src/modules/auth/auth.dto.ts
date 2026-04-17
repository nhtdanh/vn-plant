import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu tối thiểu 6 ký tự"),
  displayName: z
    .string()
    .min(1, "Tên hiển thị không được để trống")
    .optional(),
});

export const loginSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(1, "Mật khẩu không được để trống"),
});

export const updateUserSchema = z.object({
  displayName: z.string().min(1, "Tên hiển thị không được để trống").optional(),
  avatarUrl: z.string().url("Link ảnh không hợp lệ").optional(),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
