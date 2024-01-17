const { Country } = require("../../../infra/database/entities/country");

module.exports = {
  async execute() {
    const countries = await Country.findAll();

    return countries;
  },
};
