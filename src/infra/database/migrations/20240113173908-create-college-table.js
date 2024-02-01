"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("instituicao", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
      },
      site: {
        type: Sequelize.STRING,
      },
      foto_url: {
        type: Sequelize.STRING,
      },
      pais_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "pais",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("instituicao");
  },
};
