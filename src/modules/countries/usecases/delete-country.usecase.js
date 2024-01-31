const { Country } = require("../../../infra/database/entities/country");

module.exports = {
  async execute({ countryId }) {
    await Country.destroy({
      where: {
        id: countryId,
      },
      cascade: true,
    });
  },
};
