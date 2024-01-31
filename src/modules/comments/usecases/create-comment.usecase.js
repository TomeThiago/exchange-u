const { SubCategory } = require("../../../infra/database/entities/subcategory");
const { Comment } = require("../../../infra/database/entities/comment");
const { Country } = require("../../../infra/database/entities/country");

const AppError = require("../../../infra/errors/AppError");

module.exports = {
  async execute({ subCategoryId, countryId, message, userId }) {
    const country = await Country.findOne({
      where: {
        id: countryId,
      },
    });

    if (!country) {
      throw new AppError("Country does not exist");
    }

    const subCategory = await SubCategory.findOne({
      where: {
        id: subCategoryId,
      },
    });

    if (!subCategory) {
      throw new AppError("Sub-Category does not exist");
    }

    const comment = await Comment.create({
      userId,
      subCategoryId,
      countryId,
      message,
    });

    return comment;
  },
};
