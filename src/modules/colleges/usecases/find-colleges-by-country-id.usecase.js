const { College } = require("../../../infra/database/entities/college");

module.exports = {
  async execute({ countryId }) {
    const colleges = await College.findAll({
      where: {
        countryId,
      },
    });

    return colleges;
  },
};
