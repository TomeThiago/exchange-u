const AppError = require("../errors/AppError");

module.exports = (error, request, response, next) => {
  if (error instanceof AppError) {
    return response
      .status(error.statusCode || 400)
      .json({ error: error.message });
  }

  return response.status(500).json({ error: error.message });
};
