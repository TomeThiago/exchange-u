const { Like } = require("../../../infra/database/entities/like");

module.exports = {
  async execute({ commentId, userId }) {
    await Like.destroy({
      where: {
        commentId,
        userId,
      },
    });
  },
};
