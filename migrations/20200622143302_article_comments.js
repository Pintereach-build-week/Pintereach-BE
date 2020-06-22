
exports.up = function(knex) {
  return knex.schema.createTable("article_comments", tbl => {
      tbl.increments();
      tbl.integer("comment_id")
      .unsigned()
      .references("comments.id")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
      tbl.integer("article_id")
      .unsigned()
      .references("articles.id")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("article_comments");
};
