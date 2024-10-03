import { Router } from "express";

const BlogRouter = Router();

BlogRouter.get("/", (req, res)=>{
    res.send("Blog Home Page");
});

export default BlogRouter;