const knex = require("knex");
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    find,
    findById,
    add,
    remove,
    update,
    addUserArticle
}

function find() {
    return db("articles");
}

function findById(id) {
    return db("articles").where({id: id});
}

function add(newArticle) {
    return db("articles").insert(newArticle)
    .then(article => {
        return article
    })
}

function remove(id) {
    return db("articles").del().where({id: id});
}

function update(id, changes) {
    return db("articles").where({id: id}).update(changes)
    .then(() => {
        return changes;
    })
}

//adding article to user_posts
function addUserArticle(userId, articleId) {
    return db("user_posts").insert({user_id: userId, article_id: articleId})
    .then(() => {
        console.log({userId, articleId})
    })
}