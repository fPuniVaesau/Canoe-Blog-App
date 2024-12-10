import { response, Router } from "express";

const BlogRouter = Router();

BlogRouter.get("/", (request, response) => {
    response.send({router: "Blog Router"})
})

