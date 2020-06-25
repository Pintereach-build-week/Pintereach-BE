const supertest = require("supertest");
const server = require("../api/server.js");
const db = require("../data/dbConfig.js");

describe("verify that a users posts are tied to their account", () => {
    test("GET /userArticles/:id", () => {
        const login = {
            username: "kory",
            password: "password"
        }
        return supertest(server)
        .post("/users/login")
        .send(login)
        .then(res => {
            const token = res.body.token;

            return supertest(server)
            .get("/userArticles/1")
            .set({Authorization: token})
            .then(res => {
                expect(res.body.username).toBe("kory")
            })
        })
    })
})