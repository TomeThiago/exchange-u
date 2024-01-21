"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categoria",
      [
        {
          id: 1,
          nome: "Visto de Estudante",
        },
        {
          id: 2,
          nome: "Finanças",
        },
        {
          id: 3,
          nome: "Utilidades",
        },
        {
          id: 4,
          nome: "Seguros",
        },
        {
          id: 5,
          nome: "Contrato de Estudos",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categoria", null, {});
  },
};
