const knex = require("knex");
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    add,
    findBy
}

function add(userInfo) {
    return db("users").insert(userInfo);
}

function findBy(filter) {
    return db("users").where(filter);
}

