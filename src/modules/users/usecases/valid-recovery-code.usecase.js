const moment = require("moment");
const {
  RecoveryPassword,
} = require("../../../infra/database/entities/recovery-password");
const AppError = require("../../../infra/errors/AppError");

module.exports = {
  async execute({ email, code }) {
    email = email.toLowerCase();

    const codeExists = await RecoveryPassword.findOne({
      where: {
        email,
        code,
        isValidated: false,
      },
    });

    if (!codeExists) {
      throw new AppError("Password recovery verification code is invalid");
    }

    const now = moment();

    const dateMoreFifteenMinutes = moment(codeExists.createdAt).add(
      15,
      "minutes"
    );

    if (dateMoreFifteenMinutes.isBefore(now)) {
      throw new AppError("The code entered has already expired");
    }

    codeExists.isValidated = true;

    await codeExists.save();
  },
};
