const express = require("express");
const router = express.Router();

const Users = require("./users_model.js");
const constants = require("../config/constants.js");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(error => {
        res.status(500).json(error.message)
    })
})

router.get("/:id", (req, res) => {
    Users.findBy({id: req.params.id})
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        res.json(err.message)
    })
})


router.post("/register", (req, res) => {
    const newUser = req.body;

    if (newUser) { 
        const rounds = process.env.BCRPYT_ROUNDS || 8;

        const hash = bcrypt.hashSync(newUser.password, rounds);
        newUser.password = hash;

        Users.add(newUser)
        .then(user => {
            res.status(200).json(newUser);
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    } else {
        res.status(400).json({message: "You need to provide proper credentials!"})
    }
})

router.post("/login", (req, res) => {
    const {username, password} = req.body;

    if (req.body) {
        Users.findBy({username: username})
        .then(([user]) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = createToken(user);
                res.status(200).json({token, user})
            } else {
                res.status(400).json("invalid credentials")
            }
        })
        .catch(err => {
            res.status(500).json({message: err.message});
        })
    } else {
        res.status(401).json({message: "Please provide valid credentials"})
    }
})

function createToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        department: user.department
      };
    
      const secret = constants.jwtSecret;
    
      const options = {
        expiresIn: "1d"
      };
      
      return jwt.sign(payload, secret, options)
    }


module.exports = router;