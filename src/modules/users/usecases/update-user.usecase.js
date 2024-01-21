const { User } = require("../../../infra/database/entities/user");
const AppError = require("../../../infra/errors/AppError");

module.exports = {
  async execute({ userId, name, email, college }) {
    const user = await User.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new AppError(`User does not exist`);
    }

    if (email !== user.email) {
      const emailAlreadyExists = await User.findOne({
        where: {
          email,
        },
      });

      if (emailAlreadyExists) {
        throw new AppError("The email is already being used by another user");
      }

      user.email = email;
    }

    user.name = name || user.name;
    user.college = college || user.college;

    await user.save();

    user.password = undefined;

    return user;
  },
};
