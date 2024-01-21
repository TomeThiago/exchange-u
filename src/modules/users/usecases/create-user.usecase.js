const AppError = require("../../../infra/errors/AppError");
const { User } = require("../../../infra/database/entities/user");
const hashProvider = require("../../../infra/providers/hashProvider");

module.exports = {
  async execute({ name, email, password, photoUrl, college }) {
    email = email.toLowerCase();

    const userAlreadyExists = await User.findOne({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists", 400);
    }

    const passwordHashed = await hashProvider.hash(password);

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
