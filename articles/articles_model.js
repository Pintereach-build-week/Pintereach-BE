const knex = require("knex");
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    find,
    findById,
    add,
    remove,
    update
}

function find() {
    return db("articles");
}

function findById(id) {
    return db("articles").where({id: id});
}

function add(newArticle) {
    return db("articles").insert(newArticle)
    .then(() => {
        return newArticle
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