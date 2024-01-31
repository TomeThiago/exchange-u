const { connectionDb } = require("../../../infra/database/index");

module.exports = {
  async execute({ subCategoryId, countryId }) {
    let query = `SELECT d.usuario_id, d.comentario_id, c.sub_categoria_id, c.pais_id, c.mensagem, c.criado_em  
    FROM denuncias d LEFT JOIN comentario c ON d.comentario_id = c.id WHERE 1=1`;

    if (countryId) {
      query += ` AND pais_id = ${countryId}`;
    }

    if (subCategoryId) {
      query += ` AND sub_categoria_id = ${subCategoryId}`;
    }

    const [resultDB, _] = await connectionDb.query(query);

    return resultDB;
  },
};
