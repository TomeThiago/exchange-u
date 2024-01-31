const { Comment } = require("../../../infra/database/entities/comment");
const { Like } = require("../../../infra/database/entities/like");
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

    await Like.create({
      commentId,
      userId,
    });
  },
};
