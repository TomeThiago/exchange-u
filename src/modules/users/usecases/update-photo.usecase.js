const { User } = require("../../../infra/database/entities/user");
const AppError = require("../../../infra/errors/AppError");

module.exports = {
  async execute({ userId, photoUrl }) {
    const user = await User.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new AppError(`User does not exist`);
    }

    user.photoUrl = photoUrl;

    await user.save();

    return user;
  },
};
