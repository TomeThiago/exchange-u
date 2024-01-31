const { Comment } = require("../../../infra/database/entities/comment");
const { User } = require("../../../infra/database/entities/user");
const { Like } = require("../../../infra/database/entities/like");
const { Report } = require("../../../infra/database/entities/report");

module.exports = {
  async execute({ subCategoryId, countryId }) {
    const where = {};

    if (countryId) {
      where.countryId = countryId;
    }

    if (subCategoryId) {
      where.subCategoryId = subCategoryId;
    }

    const [comments, reports] = await Promise.all([
      Comment.findAll({
        where,
        include: [
          {
            model: User,
            as: "user",
            attributes: ["name", "photoUrl"],
          },
          {
            model: Like,
            as: "likes",
          },
        ],
      }),
      Report.findAll(),
    ]);

    const listComments = [];

    comments.forEach((comment) => {
      const foundReport = reports.find(
        (report) => report.commentId === comment.id
      );

      if (!foundReport) {
        listComments.push(comment);
      }
    });

    return listComments;
  },
};
