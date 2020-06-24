
exports.up = function(knex) {
  return knex.schema.table("users", tbl => {
      tbl.dropColumn("token");
  })
};

exports.down = function(knex) {
  return knex.schema.table("users", tbl => {
      tbl.string("token");
  })
};

