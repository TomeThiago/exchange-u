const { Country } = require("../../../infra/database/entities/country");
const AppError = require("../../../infra/errors/AppError");

module.exports = {
  async execute(props) {
    const { name, code, photoUrl } = props;

    const countryFound = await Country.findOne({
      where: {
        code,
      },
    });

    if (countryFound) {
      throw new AppError("There is already a country with this code");
    }

    const country = await Country.create({
      name,
      code,
      photoUrl,
    });

    return country;
  },
};
