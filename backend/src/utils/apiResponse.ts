import type { Response } from "express";

interface ApiResponseData<T> {
  success: boolean;
  message?: string;
  data?: T;
}

interface ErrorResponse {
  success: false;
  message: string;
  code?: string;
  errors?: Record<string, string[]> | Array<{ path: string; message: string }>;
}

export function sendSuccess<T>(
  res: Response,
  data?: T,
  message?: string,
  statusCode = 200,
) {
  const body: ApiResponseData<T> = { success: true };
  if (message) body.message = message;
  if (data !== undefined) body.data = data;
  return res.status(statusCode).json(body);
}

export function sendCreated<T>(
  res: Response,
  data?: T,
  message = "Tạo thành công",
) {
  return sendSuccess(res, data, message, 201);
}

export function sendError(
  res: Response,
  message: string,
  code?: string,
  errors?: any,
  statusCode = 400,
) {
  const body: ErrorResponse = {
    success: false,
    message,
  };
  if (code) body.code = code;
  if (errors) body.errors = errors;
  return res.status(statusCode).json(body);
}
