import type { Response } from "express";

interface ApiResponseData<T> {
  success: boolean;
  message?: string;
  data?: T;
}

export function sendSuccess<T>(res: Response, data?: T, message?: string, statusCode = 200) {
  const body: ApiResponseData<T> = { success: true };
  if (message) body.message = message;
  if (data !== undefined) body.data = data;
  return res.status(statusCode).json(body);
}

export function sendCreated<T>(res: Response, data?: T, message = "Tạo thành công") {
  return sendSuccess(res, data, message, 201);
}
