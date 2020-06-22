
exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
      tbl.increments();
      tbl.string("username").unique().notNullable();
      tbl.string("password").notNullable();
      tbl.string("token");
  })
  .createTable("categories", tbl => {
      tbl.increments();
      tbl.string("category_name").unique();
  })
  .createTable("articles", tbl => {
    tbl.increments();
    tbl.string("article_name").unique();
    tbl.string("article_content");
    tbl.integer("category_id")
    .unsigned()
    .references("categories.id")
    .onDelete("RESTRICT")
    .onUpdate("CASCADE")
})
  .createTable("user_posts", tbl => {
    tbl.increments();
    tbl.integer("user_id")
    .unsigned()
    .references("users.id")
    .onDelete("RESTRICT")
    .onUpdate("CASCADE")
    tbl.integer("article_id")
    .unsigned()
    .references("articles.id")
    .onDelete("RESTRICT")
    .onUpdate("CASCADE")
})
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("users")
  .dropTableIfExists("categories")
  .dropTableIfExists("articles")
  .dropTableIfExists("user_posts")
};
