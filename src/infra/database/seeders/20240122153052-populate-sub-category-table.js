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
          id: 5,
          nome: "Bancos",
          categoria_id: 2,
        },
        {
          id: 6,
          nome: "Cartões",
          categoria_id: 2,
        },
        {
          id: 7,
          nome: "Aplicativos",
          categoria_id: 3,
        },
        {
          id: 8,
          nome: "Moradia",
          categoria_id: 3,
        },
        {
          id: 9,
          nome: "Transporte",
          categoria_id: 3,
        },
        {
          id: 10,
          nome: "Vantagens Estudantes",
          categoria_id: 3,
        },
        {
          id: 11,
          nome: "Saúde",
          categoria_id: 4,
        },
        {
          id: 12,
          nome: "Viagem",
          categoria_id: 4,
        },
        {
          id: 13,
          nome: "Vida",
          categoria_id: 4,
        },
        {
          id: 14,
          nome: "Créditos",
          categoria_id: 5,
        },
        {
          id: 15,
          nome: "Carga",
          categoria_id: 5,
        },
        {
          id: 16,
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
