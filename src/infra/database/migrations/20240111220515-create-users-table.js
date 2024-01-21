"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("usuario", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      senha: {
        type: Sequelize.STRING,
      },
      foto_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      instituicao: {
        type: Sequelize.STRING,
      },
      administrador: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        default: false,
      },
    });
  },

  async down(queryInterface, _) {
    await queryInterface.dropTable("usuario");
  },
};
