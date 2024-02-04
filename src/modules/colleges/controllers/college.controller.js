const createCollegeUsecase = require("../usecases/create-college.usecase");
const findCollegesByCountryIdUsecase = require("../usecases/find-colleges-by-country-id.usecase");
const deleteCollegeByIdUsecase = require("../usecases/delete-college-by-id.usecase");

module.exports = {
  async create(request, response) {
    const { name, site, countryId } = request.body;
    const photoUrl = request.file;

    const country = await createCollegeUsecase.execute({
      name,
      site,
      countryId,
      photoUrl,
    });

    return response.json(country);
  },

  async findCollegesByCountryId(request, response) {
    const { countryId } = request.params;

    const colleges = await findCollegesByCountryIdUsecase.execute({
      countryId,
    });

    return response.json(colleges);
  },

  async deleteCollege(request, response) {
    const { collegeId } = request.params;

    await deleteCollegeByIdUsecase.execute({
      collegeId,
    });

    return response.status(205).json();
  },
};
