"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "sub_categoria",
      [
        {
          id: 1,
          nome: "Documentos",
          categoria_id: 1,
        },
        {
          id: 2,
          nome: "Contatos",
          categoria_id: 1,
        },
        {
          id: 3,
          nome: "Taxas",
          categoria_id: 1,
        },
        {
          id: 4,
          nome: "Prazos",
          categoria_id: 1,
        },
        {
          id: 6,
          nome: "Bancos",
          categoria_id: 2,
        },
        {
          id: 7,
          nome: "Cartões",
          categoria_id: 2,
        },
        {
          id: 8,
          nome: "Aplicativos",
          categoria_id: 3,
        },
        {
          id: 9,
          nome: "Moradia",
          categoria_id: 3,
        },
        {
          id: 10,
          nome: "Transporte",
          categoria_id: 3,
        },
        {
          id: 11,
          nome: "Vantagens Estudantes",
          categoria_id: 3,
        },
        {
          id: 12,
          nome: "Saúde",
          categoria_id: 4,
        },
        {
          id: 13,
          nome: "Viagem",
          categoria_id: 4,
        },
        {
          id: 14,
          nome: "Vida",
          categoria_id: 4,
        },
        {
          id: 15,
          nome: "Créditos",
          categoria_id: 5,
        },
        {
          id: 16,
          nome: "Carga",
          categoria_id: 5,
        },
        {
          id: 17,
          nome: "Equivalência",
          categoria_id: 5,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sub_categoria", null, {});
  },
};
