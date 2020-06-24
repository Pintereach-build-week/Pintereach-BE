const express = require("express");


const server = express();
const db = require("../data/dbConfig.js");

server.use(express.json());

const articlesRouter = require("../articles/articles_router.js");
const usersRouter = require("../users/users_router.js");
const userArticlesRouter = require("../users/user_articles_router.js")

server.use("/articles", articlesRouter);
server.use("/users", usersRouter);
server.use("/userArticles", userArticlesRouter);

server.get("/", (req, res) => {
    res.status(200).json({api: "Welcome to the Pintereach api!"})
})

module.exports = server;