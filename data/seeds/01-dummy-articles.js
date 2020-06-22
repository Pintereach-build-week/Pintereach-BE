
exports.seed = function(knex) {
      return knex('articles').insert([
        {article_name: "Very Good Article", article_content: "Hmm, yes, very interesting information in here", category_id: 1}
      ]);
};
