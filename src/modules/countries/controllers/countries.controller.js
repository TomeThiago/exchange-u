const createCountryUsecase = require("../usecases/create-country.usecase");
const listCountriesUsecase = require("../usecases/list-countries.usecase");

module.exports = {
  async create(request, response) {
    const { name, photoUrl, code } = request.body;

    const country = await createCountryUsecase.execute({
      name,
      photoUrl,
      code,
    });

    return response.json(country);
  },

  async findCountries(request, response) {
    const countries = await listCountriesUsecase.execute();

    return response.json(countries);
  },
};
