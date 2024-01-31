const { Sequelize, DataTypes } = require("sequelize");
const { connectionDb } = require("..");
const { User } = require("./user");
const { Like } = require("./like");

const Comment = connectionDb.define(
  "Comment",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      field: "usuario_id",
    },
    subCategoryId: {
      type: Sequelize.INTEGER,
      field: "sub_categoria_id",
    },
    countryId: {
      type: Sequelize.INTEGER,
      field: "pais_id",
    },
    message: {
      type: Sequelize.STRING,
      field: "mensagem",
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "criado_em",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    tableName: "comentario",
    timestamps: false,
  }
);

Comment.belongsTo(User, { foreignKey: "userId", as: "user" });
Comment.hasMany(Like, { foreignKey: "commentId", as: "likes" });

module.exports = { Comment };
