const AppError = require("../../../infra/errors/AppError");
const { User } = require("../../../infra/database/entities/user");
const hashProvider = require("../../../infra/providers/hashProvider");
const storageProvider = require("../../../infra/providers/storageProvider");

module.exports = {
  async execute({ name, email, password, photoUrl, college }) {
    email = email.toLowerCase();

    const userAlreadyExists = await User.findOne({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists", 400);
    }

    const passwordHashed = await hashProvider.hash(password);

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

    const user = await User.create({
      name,
      email,
      photoUrl,
      college,
      password: passwordHashed,
    });

    user.password = undefined;

    return user;
  },
};
