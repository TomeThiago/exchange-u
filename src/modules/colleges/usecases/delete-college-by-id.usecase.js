const { College } = require("../../../infra/database/entities/college");

module.exports = {
  async execute({ collegeId }) {
    await College.destroy({
      where: {
        id: collegeId,
      },
    });
  },
};
