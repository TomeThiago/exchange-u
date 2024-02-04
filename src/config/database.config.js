require("dotenv").config();
const path = require("path");

module.exports = {
  development: {
    dialect: "postgres",
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME,
    define: {
      timestamp: false,
    },
    seederStorage: "sequelize",
    seederStoragePath: path.resolve(
      __dirname,
      "src",
      "infra",
      "database",
      "seeders",
      "sequelizeData.json"
    ),
    seederStorageTableName: "SequelizeMeta",
  },
};
