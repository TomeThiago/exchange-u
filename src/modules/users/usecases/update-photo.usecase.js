const { User } = require("../../../infra/database/entities/user");
const AppError = require("../../../infra/errors/AppError");
const storageProvider = require("../../../infra/providers/storageProvider");

module.exports = {
  async execute({ userId, photoUrl }) {
    const user = await User.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new AppError(`User does not exist`);
    }

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

    if (photoUrl) {
      await storageProvider.upload({
        path: `users`,
        file: photoUrl,
      });

      const publicPhotoUrl = storageProvider.getPublicUrl({
        path: `users`,
        fileName: photoUrl.originalname,
      });

      photoUrl = publicPhotoUrl.data.publicUrl;
    }

    user.photoUrl = photoUrl;

    await user.save();

    return user;
  },
};
