const express = require("express");

const router = express.Router();

const Articles = require("./articles_model.js");
const userArticles = require("../users/user_articles_model.js");
const restricted = require("../users/restricted_middleware.js");

router.get("/", (req, res) => {
    Articles.find()
    .then(articles => {
        res.status(200).json(articles)
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})

router.get("/:id", (req, res) => {
    Articles.findById(req.params.id)
    .then(article => {
        res.status(200).json(article);
    })
})

router.post("/", restricted, (req, res) => {
    const userId = req.decodedToken.subject;
    Articles.add(req.body)
    .then(([newArticle]) => {
        Articles.addUserArticle(userId, newArticle);
        res.status(200).json(newArticle);
    })
    .catch(err => {
        res.status(500).json(err.message);
    })
})

router.delete("/:id", (req, res) => {
    Articles.findById(req.params.id)
    .then(article => {
        Articles.remove(req.params.id)
        .then(() => {
        res.status(202).json(article);
        })
    })
})

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    Articles.update(id, changes)
    .then(updatedArticle => {
        res.status(200).json({Updates: updatedArticle});
    })
})

module.exports = router;