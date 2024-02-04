const { College } = require("../../../infra/database/entities/college");
const { Country } = require("../../../infra/database/entities/country");
const AppError = require("../../../infra/errors/AppError");
const storageProvider = require("../../../infra/providers/storageProvider");

module.exports = {
  async execute({ name, site, countryId, photoUrl }) {
    const country = await Country.findOne({
      where: {
        id: countryId,
      },
    });

    if (!country) {
      throw new AppError("Country does not exist");
    }

    if (photoUrl) {
      await storageProvider.upload({
        path: `colleges`,
        file: photoUrl,
      });

      const publicPhotoUrl = storageProvider.getPublicUrl({
        path: `colleges`,
        fileName: photoUrl.originalname,
      });

      photoUrl = publicPhotoUrl.data.publicUrl;
    }

    const college = await College.create({
      name,
      site,
      countryId: country.id,
      photoUrl,
    });

    return college;
  },
};
