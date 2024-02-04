const { User } = require("../../../infra/database/entities/user");
const storageProvider = require("../../../infra/providers/storageProvider");

module.exports = {
  async execute(userId) {
    const user = await User.findOne({
      where: {
        id: userId,
      },
    });

    if (user) {
      if (user.photoUrl) {
        const filePath = user.photoUrl.replace(
          `${process.env.SUPABASE_URL}/storage/v1/object/public/${process.env.SUPABASE_BUCKET_NAME}/`,
          ""
        );

        const [path, fileName] = filePath.split("/");

        await storageProvider.remove({
          path,
          fileName,
        });
      }

      await User.destroy({
        where: {
          id: user.id,
        },
      });
    }
  },
};
