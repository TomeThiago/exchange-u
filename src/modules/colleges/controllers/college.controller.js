const createCollegeUsecase = require("../usecases/create-college.usecase");

module.exports = {
  async create(request, response) {
    const { name, site, countryId, photoUrl } = request.body;

    const country = await createCollegeUsecase.execute({
      name,
      site,
      countryId,
      photoUrl,
    });

    return response.json(country);
  },
};
