const supertest = require("supertest");
const router = require("./articles_router.js");
const server = require("../api/server.js");
const db = require("../data/dbConfig.js");
const { application } = require("express");

describe("/articles_router.js", () => {
    describe("GET /", () => {
        test("should return list of articles that are currently on the db", () => {
            return supertest(server)
            .get("/articles")
            .set("Accept", "application/json")
            .then(res => {
               expect(res.status).toBe(200);
            //    console.log(res.status)
            })
        })

        test("Should return specified article by id", () => {
            return supertest(server)
            .get("/articles/4")
            .then(res => {
                const [{id}] = res.body
                // console.log(id)
                expect(id).toBe(4)
            })
        })
    })
//     describe("POST /", () => {
//         test("Verify that restricted middleware is working", () => {
//             const newPost = {
//                 article_name: "Party Hard with Andrew W.K!",
//                 article_url: "http://andrewwk.com/music/albums/youre-not-alone"
//             }
//             const creds = {
//                 username: "kory",
//                 password: "password"
//             }
//             return supertest(server)
//             .post("/users/login")
//             .send(creds)
//             .then(res => {
//                 const token = res.body.token;
//                 // console.log(token)
//                 return supertest(server)
//                 .post("/articles")
//                 .send(newPost)
//                 .set({Authorization: token})
//                 .then(res => {
//                     expect(res.body.newArticle).not.toBe(null)
//                 })
//             })
//         })
//     })
//     describe("DELETE /:id", () => {
//         test("Should delete a freshly create article", () => {
//             return supertest(server)
//             .delete("/articles/15")
//             .then(res => {
//                 return supertest(server)
//                 .get("/articles/15")
//                 .then(res => {
//                     expect(res.body).toStrictEqual([])
//                 })
//             })
//         })
//     })
// })
