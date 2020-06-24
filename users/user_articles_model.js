const knex = require("knex");
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.production);

module.exports = {
    find,
    findBy
}

function find() {
    return db("user_posts");
}

function findBy(userId) {
    return db("user_posts")
    .join("articles", "user_posts.article_id", "=", "articles.id")
    .join("users", "user_posts.user_id", "=", "users.id")
    .select("articles.article_name", "articles.article_content")
}

