export class ApiError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }

  static badRequest(message: string) {
    return new ApiError(400, message);
  }

  static unauthorized(message: string = "Unauthorized") {
    return new ApiError(401, message);
  }

  static forbidden(message: string = "Forbidden") {
    return new ApiError(403, message);
  }

  static notFound(message: string = "Not Found") {
    return new ApiError(404, message);
  }

  static conflict(message: string) {
    return new ApiError(409, message);
  }

  static internal(message: string = "Internal Server Error") {
    return new ApiError(500, message);
  }
}
