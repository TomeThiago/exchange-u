const jwt = require("jsonwebtoken");
const AppError = require("../errors/AppError");

module.exports = (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT token is missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(token, process.env.SECRET);

    const { user } = decoded;

    request.user = user;

    return next();
  } catch (err) {
    throw new AppError("Invalid JWT token", 401);
  }
};
