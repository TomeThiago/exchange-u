const { User } = require("../../../infra/database/entities/user");
const AppError = require("../../../infra/errors/AppError");

module.exports = {
  async execute(userId) {
    const user = await User.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new AppError(`User does not exist`);
    }

    user.password = undefined;

    return user;
  },
};
