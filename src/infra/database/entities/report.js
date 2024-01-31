const { Sequelize } = require("sequelize");
const { connectionDb } = require("..");
const { User } = require("./user");
const { Comment } = require("./comment");

const Report = connectionDb.define(
  "Report",
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
    tableName: "denuncias",
    timestamps: false,
  }
);

Report.belongsTo(User, { foreignKey: "userId", as: "user" });
Report.belongsTo(Comment, { foreignKey: "commentId", as: "comment" });

module.exports = { Report };
