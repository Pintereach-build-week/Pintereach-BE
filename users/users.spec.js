const supertest = require("supertest");
const server = require("../api/server.js");
const db = require("../data/dbConfig.js")

describe("verify that a token is getting returned on login", () => {
    test("/users", () => {
        const login = {
            username: "kory",
            password: "password"
        }
        return supertest(server)
        .post("/users/login")
        .send(login)
        .then(res => {
            // console.log(res.body.token);
            expect(res.body.token).not.toBe(undefined)
        })
    })
})

describe("verify that a new user's password is hashed", () => {
    test("/users", () => {
        const newUser = {
            username: "thor",
            password: "hammer"
        }
        return supertest(server)
        .post("/users/register")
        .send(newUser)
        .then(res => {
            expect(res.body.password).not.toBe("hammer");
            console.log({hashedPass: res.body.password})
        })
    })
})