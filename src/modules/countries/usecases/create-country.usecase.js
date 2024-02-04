const { Country } = require("../../../infra/database/entities/country");
const AppError = require("../../../infra/errors/AppError");
const storageProvider = require("../../../infra/providers/storageProvider");

module.exports = {
  async execute({ name, code, photoUrl }) {
    const countryFound = await Country.findOne({
      where: {
        code,
      },
    });

    if (countryFound) {
      throw new AppError("There is already a country with this code");
    }

    if (photoUrl) {
      await storageProvider.upload({
        path: `countries`,
        file: photoUrl,
      });

      const publicPhotoUrl = storageProvider.getPublicUrl({
        path: `countries`,
        fileName: photoUrl.originalname,
      });

      photoUrl = publicPhotoUrl.data.publicUrl;
    }

    const country = await Country.create({
      name,
      code,
      photoUrl,
    });

    return country;
  },
};
