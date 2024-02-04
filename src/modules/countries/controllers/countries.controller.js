const createCountryUsecase = require("../usecases/create-country.usecase");
const deleteCountryUsecase = require("../usecases/delete-country.usecase");
const listCountriesUsecase = require("../usecases/list-countries.usecase");

module.exports = {
  async create(request, response) {
    const { name, code } = request.body;
    const photoUrl = request.file;

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

  async deleteCountry(request, response) {
    const { countryId } = request.params;

    await deleteCountryUsecase.execute({
      countryId,
    });

    return response.status(205).json();
  },
};
