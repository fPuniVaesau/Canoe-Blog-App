import { response, Router } from "express";

const BlogRouter = Router();

BlogRouter.get("/", (request, response) => {
    response.send({router: "Blog Router"})
})

BlogRouter.get("/:id", (request, response) => {
    const {params:{id}} = request
    const parsedID = parseInt(id);
    
    return response.send({userID: `${parsedID}`});
})

BlogRouter.get("/search?filter")

export default BlogRouter;

