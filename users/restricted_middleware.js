const jwt = require("jsonwebtoken");
const constants = require("../config/constants.js");

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    const secret = constants.jwtSecret;

    if (token) {
        jwt.verify(token, secret, (error, decodedToken) => {
            if (error) {
                res.status(400).json({Error: "Token is invalid, please try logging in again."})
            } else {
                req.decodedToken = decodedToken;

                next();
            }
        })
    } else {
        res.status(401).json("Credentials are invalid")
    }
}