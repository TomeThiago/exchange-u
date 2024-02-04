const { College } = require("../../../infra/database/entities/college");
const storageProvider = require("../../../infra/providers/storageProvider");

module.exports = {
  async execute({ collegeId }) {
    const college = await College.findOne({
      where: {
        id: collegeId,
      },
    });

    if (college) {
      if (college.photoUrl) {
        const filePath = college.photoUrl.replace(
          `${process.env.SUPABASE_URL}/storage/v1/object/public/${process.env.SUPABASE_BUCKET_NAME}/`,
          ""
        );

        const [path, fileName] = filePath.split("/");

        await storageProvider.remove({
          path,
          fileName,
        });
      }

      await College.destroy({
        where: {
          id: collegeId,
        },
      });
    }
  },
};
