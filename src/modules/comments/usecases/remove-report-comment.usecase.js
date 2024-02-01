const { Report } = require("../../../infra/database/entities/report");

module.exports = {
  async execute({ reportId }) {
    await Report.destroy({
      where: {
        id: reportId,
      },
    });
  },
};
