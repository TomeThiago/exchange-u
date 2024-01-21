const createCountryUsecase = require("../usecases/create-country.usecase");
const listCountriesUsecase = require("../usecases/list-countries.usecase");

module.exports = {
  async create(request, response) {
    const { name, code } = request.body;
    const photoUrl = request.file;

    const country = await createCountryUsecase.execute({
      name,
      photoUrl: `${process.env.APP_URL}/files/${photoUrl.filename}`,
      code,
    });

    return response.json(country);
  },

  async findCountries(request, response) {
    const countries = await listCountriesUsecase.execute();

    return response.json(countries);
  },
};
