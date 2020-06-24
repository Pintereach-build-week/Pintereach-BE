
exports.seed = function(knex) {
  return knex("user_posts").insert([
    {user_id: "1", article_id: "1"},
    {user_id: "1", article_id: "2"}
  ])
};
