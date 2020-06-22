const express = require("express");


const server = express();
const db = require("../data/dbConfig.js")

server.use(express.json());

const articlesRouter = require("../articles/articles_router.js")

server.use("/articles", articlesRouter);

module.exports = server;