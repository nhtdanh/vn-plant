export class ApiError extends Error {
  statusCode: number;
  code: string;

  constructor(statusCode: number, message: string, code?: string) {
    super(message);
    this.statusCode = statusCode;
    this.code = code || "UNKNOWN_ERROR";
  }

  static badRequest(message: string, code = "BAD_REQUEST") {
    return new ApiError(400, message, code);
  }

  static unauthorized(message: string = "Unauthorized", code = "UNAUTHORIZED") {
    return new ApiError(401, message, code);
  }

  static forbidden(message: string = "Forbidden", code = "FORBIDDEN") {
    return new ApiError(403, message, code);
  }

  static notFound(message: string = "Not Found", code = "NOT_FOUND") {
    return new ApiError(404, message, code);
  }

  static conflict(message: string, code = "CONFLICT") {
    return new ApiError(409, message, code);
  }

  static internal(
    message: string = "Internal Server Error",
    code = "INTERNAL_ERROR",
  ) {
    return new ApiError(500, message, code);
  }
}
