import { response, Router } from "express";

const BlogRouter = Router();

BlogRouter.get("/", (request, response) => {
    response.send({router: "Blog Router"})
})

BlogRouter.get("/:id", (request, response) => {
    const {params:{id}} = request
    return response.send({userID: `${id}`});
})

export default BlogRouter;

