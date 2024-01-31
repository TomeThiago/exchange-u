const jwt = require("jsonwebtoken");

const AppError = require("../../../infra/errors/AppError");
const { User } = require("../../../infra/database/entities/user");
const hashProvider = require("../../../infra/providers/hashProvider");

module.exports = {
  async execute(session) {
    const { login, password } = session;

    const user = await User.findOne({
      where: {
        email: login.toLowerCase(),
      },
    });

    if (!user) {
      throw new AppError("Email or password invalid", 401);
    }

    const passwordMatch = await hashProvider.compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password invalid", 401);
    }

    const payload = {
      user: {
        id: user.id,
        name: user.name,
        college: user.college,
        admin: user.admin,
      },
    };

    const token = jwt.sign(payload, process.env.SECRET || "secret", {
      subject: String(user.id),
      expiresIn: process.env.EXPIRES_IN,
    });

    return {
      token,
      user: payload.user,
    };
  },
};
