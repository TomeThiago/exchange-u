const bcrypt = require("bcrypt");
const AppError = require("../../../infra/errors/AppError");
const { User } = require("../../../infra/database/entities/user");

module.exports = {
  async execute({ name, email, password, photoUrl, college }) {
    const userAlreadyExists = await User.findOne({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists", 400);
    }

    const passwordHashed = await bcrypt.hash(password, 8);

    const user = await User.create({
      name,
      email,
      photoUrl,
      college,
      password: passwordHashed,
    });

    user.password = undefined;

    return user;
  },
};
