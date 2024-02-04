const crypto = require("crypto");

const { supabaseClient } = require("../../../config/supabase.config");

const bucketName = process.env.SUPABASE_BUCKET_NAME;

module.exports = {
  async upload({ path, file }) {
    file.originalname = file.originalname.replace(/ /g, "_");

    const hash = crypto.randomBytes(16);

    file.originalname = `${hash.toString("hex")}-${file.originalname}`;

    const { data, error } = await supabaseClient.storage
      .from(bucketName)
      .upload(`${path}/${file.originalname}`, file.buffer, {
        contentType: "image/jpeg",
      });

    if (error) {
      console.log("error: ", error);
    }

    return data;
  },

  getPublicUrl({ path, fileName }) {
    const publicUrl = supabaseClient.storage
      .from(bucketName)
      .getPublicUrl(`${path}/${fileName}`);

    return publicUrl;
  },

  async remove({ path, fileName }) {
    await supabaseClient.storage.from(bucketName).remove(`${path}/${fileName}`);
  },
};
