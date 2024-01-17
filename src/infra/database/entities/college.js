const { Sequelize } = require("sequelize");
const { connectionDb } = require("..");

const College = connectionDb.define(
  "College",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      field: "nome",
    },
    site: {
      type: Sequelize.STRING,
      field: "site",
    },
    photoUrl: {
      type: Sequelize.STRING,
      allowNull: true,
      field: "foto_url",
    },
    countryId: {
      type: Sequelize.INTEGER,
      field: "pais_id",
    },
  },
  {
    tableName: "instituicao",
    timestamps: false,
  }
);

module.exports = { College };
