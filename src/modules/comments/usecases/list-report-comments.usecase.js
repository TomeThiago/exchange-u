const { connectionDb } = require("../../../infra/database/index");

module.exports = {
  async execute({ subCategoryId, countryId }) {
    let query = `SELECT d.id, d.usuario_id as user_id, d.comentario_id as comment_id, c.sub_categoria_id as sub_category_id, c.pais_id as country_id, 
    c.mensagem as message, c.criado_em as created_at, u.nome as username, u.foto_url as user_photo_url FROM denuncias d 
    LEFT JOIN comentario c ON d.comentario_id = c.id 
    LEFT JOIN usuario u ON u.id = c.usuario_id  
    WHERE 1=1`;

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
