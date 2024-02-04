"use strict";

const hashProvider = require("../../providers/hashProvider");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const password = await hashProvider.hash("admin@123");

    await queryInterface.bulkInsert(
      "usuario",
      [
        {
          nome: "Administrador",
          email: "admin@exchangeu.com.br",
          senha: password,
          instituicao: "Admin",
          administrador: true,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("usuario", null, {});
  },
};
