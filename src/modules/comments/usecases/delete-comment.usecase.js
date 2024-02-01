const { Comment } = require("../../../infra/database/entities/comment");

module.exports = {
  async execute({ commentId }) {
    await Comment.destroy({
      where: {
        id: commentId,
      },
    });
  },
};
