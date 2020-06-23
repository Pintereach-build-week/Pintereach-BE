const express = require("express");


const server = express();
const db = require("../data/dbConfig.js");

server.use(express.json());

const articlesRouter = require("../articles/articles_router.js");
const usersRouter = require("../users/users_router.js");

server.use("/articles", articlesRouter);
server.use("/users", usersRouter);

module.exports = server;