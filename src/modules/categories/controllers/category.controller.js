const findCategoriesUsecase = require("../usecases/find-categories.usecase");

module.exports = {
  async findAll(request, response) {
    const categories = await findCategoriesUsecase.execute();

    return response.json(categories);
  },
};
