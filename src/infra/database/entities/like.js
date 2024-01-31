const { Sequelize } = require("sequelize");
const { connectionDb } = require("..");
const { User } = require("./user");

const Like = connectionDb.define(
  "Like",
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
    commentId: {
      type: Sequelize.INTEGER,
      field: "comentario_id",
    },
  },
  {
    tableName: "curtidas",
    timestamps: false,
  }
);

Like.belongsTo(User, { foreignKey: "userId", as: "user" });

module.exports = { Like };
