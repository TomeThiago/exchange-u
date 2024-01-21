const {
  RecoveryPassword,
} = require("../../../infra/database/entities/recovery-password");
const { User } = require("../../../infra/database/entities/user");
const mailProvider = require("../../../infra/providers/mailProvider");

module.exports = {
  async execute({ email }) {
    email = email.toLowerCase();

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user) {
      const code = String(Math.floor(Math.random() * 90000) + 10000);

      await RecoveryPassword.create({
        email,
        code,
      });

      await mailProvider.sendEmail({
        subject: "Recuperar sua senha",
        email,
        body: code,
      });
    }
  },
};
