const { Comment } = require("../../../infra/database/entities/comment");
const { Report } = require("../../../infra/database/entities/report");
const { User } = require("../../../infra/database/entities/user");

module.exports = {
  async execute({ commentId, userId }) {
    const comment = await Comment.findOne({
      where: {
        id: commentId,
      },
    });

    if (!comment) {
      throw new AppError("Comment does not exist");
    }

    const user = await User.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new AppError("User does not exist");
    }

    await Report.create({
      commentId,
      userId,
    });
  },
};
