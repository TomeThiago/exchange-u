const { Category } = require("../../../infra/database/entities/category");

module.exports = {
  async execute() {
    const categories = await Category.findAll();

    return categories;
  },
};
