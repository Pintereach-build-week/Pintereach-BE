
exports.up = function(knex) {
  return knex.schema.table("articles", tbl => {
      tbl.renameColumn("article_content", "article_url");
  })
};

exports.down = function(knex) {
  return knex.schema.table("articles", tbl => {
      tbl.renameColumn("article_url", "article_content");
  })
};
