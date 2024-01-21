const moment = require("moment");
const {
  RecoveryPassword,
} = require("../../../infra/database/entities/recovery-password");
const AppError = require("../../../infra/errors/AppError");
const { User } = require("../../../infra/database/entities/user");
const hashProvider = require("../../../infra/providers/hashProvider");

module.exports = {
  async execute({ code, email, newPassword }) {
    email = email.toLowerCase();

    const codeExists = await RecoveryPassword.findOne({
      where: {
        email,
        code,
        isValidated: true,
      },
    });

    if (!codeExists) {
      throw new AppError("Password recovery verification code is invalid");
    }

    const now = moment();

    const dateMoreFifteenMinutes = moment(codeExists.createdAt).add(1, "hour");

    if (dateMoreFifteenMinutes.isBefore(now)) {
      throw new AppError(
        "Time to reset the password with this code has expired"
      );
    }

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      throw new AppError("User does not exist");
    }

    const passwordHashed = await hashProvider.hash(newPassword);

    user.password = passwordHashed;

    await user.save();
  },
};
