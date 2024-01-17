class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "AppError";
    this.statusCode = statusCode || 400;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
