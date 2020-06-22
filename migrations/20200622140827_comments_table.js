
exports.up = function(knex) {
  return knex.schema.createTable("comments", tbl => {
      tbl.increments();
      tbl.string("comment_text").notNullable();
      tbl.integer("user_id").unsigned().references("users.id");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("comments");
};
