const { College } = require("../../../infra/database/entities/college");
const { Country } = require("../../../infra/database/entities/country");
const AppError = require("../../../infra/errors/AppError");

module.exports = {
  async execute(props) {
    const { name, site, countryId, photoUrl } = props;

    const country = await Country.findOne({
      where: {
        id: countryId,
      },
    });

    if (!country) {
      throw new AppError("Country does not exist");
    }

    const college = await College.create({
      name,
      site,
      countryId: country.id,
      photoUrl,
    });

    return college;
  },
};
