import type { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { ApiError } from "../utils/apiError";
import { sendError } from "../utils/apiResponse";

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => ({
      path: issue.path.join(".") || "root",
      message: issue.message,
    }));
    return sendError(
      res,
      "Dữ liệu không hợp lệ",
      "VALIDATION_ERROR",
      errors,
      400,
    );
  }

  if (err instanceof ApiError) {
    return sendError(res, err.message, err.code, undefined, err.statusCode);
  }

  if (
    typeof err === "object" &&
    err !== null &&
    "code" in err &&
    err.code === "P2002"
  ) {
    return sendError(res, "Dữ liệu đã tồn tại trong hệ thống", "CONFLICT", undefined, 409);
  }

  const message = err instanceof Error ? err.message : "Unknown error";
  const stack = err instanceof Error ? err.stack : undefined;
  const isDev = process.env["NODE_ENV"] !== "production";

  console.error("[Error]", {
    message,
    stack,
    timestamp: new Date().toISOString(),
  });

  return sendError(
    res,
    isDev ? message : "Internal Server Error",
    "INTERNAL_ERROR",
    isDev ? stack : undefined,
    500,
  );
}
