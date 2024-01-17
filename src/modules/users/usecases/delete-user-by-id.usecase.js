const { User } = require("../../../infra/database/entities/user");

module.exports = {
  async execute(userId) {
    await User.destroy({
      where: {
        id: userId,
      },
    });
  },
};
