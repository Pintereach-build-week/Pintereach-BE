const express = require("express");
const router = express.Router();

const restricted = require("./restricted_middleware.js");
const UserArticles = require("./user_articles_model.js");

router.get("/:id", restricted, (req, res) => {
    UserArticles.findBy(req.params.id)
    .then(articles => {
        res.status(200).json(articles);
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})

router.get("/", (req, res) => {
    UserArticles.find()
    .then(response => {
        res.status(200).json(response);
    })
})


module.exports = router;
