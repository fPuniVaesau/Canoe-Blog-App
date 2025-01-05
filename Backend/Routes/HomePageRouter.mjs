import { Router } from "express";

const HomePageRouter = Router();

HomePageRouter.get("/", (request, response)=>{
  console.log(req.session);
  console.log(req.session.id)

  //modifying the session will save the session data and cookies
  //Ideally this will be on the home page route and will prompt when the user initially accesses the application.
  request.session.visited = true;
  
  response.status(200).send({msg: "Welcome to the application."})
});

export default HomePageRouter;