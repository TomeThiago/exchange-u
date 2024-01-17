const { Sequelize } = require("sequelize");
const { connectionDb } = require("..");

const Country = connectionDb.define(
  "Country",
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
    code: {
      type: Sequelize.STRING,
      field: "sigla",
    },
    photoUrl: {
      type: Sequelize.STRING,
      allowNull: true,
      field: "foto_url",
    },
  },
  {
    tableName: "pais",
    timestamps: false,
  }
);

module.exports = { Country };
