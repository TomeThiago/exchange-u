const AppError = require("../errors/AppError");

module.exports = (request, response, next) => {
  const isAdmin = request.user.admin;

  if (!isAdmin) {
    throw new AppError("Only the administrator can do this operation", 403);
  }

  return next();
};
