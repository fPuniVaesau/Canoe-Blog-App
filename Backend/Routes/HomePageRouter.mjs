import { Router } from "express";

const HomePageRouter = Router();

HomePageRouter.get("/", (request, response)=>{
  request.session.visited = true;
  response.status(200).send({msg: "Welcome to the application."})
});

export default HomePageRouter;