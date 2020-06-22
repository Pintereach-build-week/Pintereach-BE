const express = require("express");

const router = express.Router();

const Articles = require("./articles_model.js");

router.get("/", (req, res) => {
    Articles.find()
    .then(articles => {
        res.status(200).json(articles)
    })
})

router.get("/:id", (req, res) => {
    Articles.findById(req.params.id)
    .then(article => {
        res.status(200).json(article);
    })
})

router.post("/", (req, res) => {
    Articles.add(req.body)
    .then(newArticle => {
        res.status(200).json(newArticle);
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
module.exports = router;