const { Country } = require("../../../infra/database/entities/country");
const storageProvider = require("../../../infra/providers/storageProvider");

module.exports = {
  async execute({ countryId }) {
    const country = await Country.findOne({
      where: {
        id: countryId,
      },
    });

    if (country) {
      if (country.photoUrl) {
        const filePath = country.photoUrl.replace(
          `${process.env.SUPABASE_URL}/storage/v1/object/public/${process.env.SUPABASE_BUCKET_NAME}/`,
          ""
        );

        const [path, fileName] = filePath.split("/");

        await storageProvider.remove({
          path,
          fileName,
        });
      }

      await Country.destroy({
        where: {
          id: country.id,
        },
        cascade: true,
      });
    }
  },
};
