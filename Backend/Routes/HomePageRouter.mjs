import { Router } from "express";

const HomePageRouter = Router();

HomePageRouter.get("/", (request, response)=>{
  
  //modifying the session will save the session data and cookies
  //Ideally this will be on the home page route and will prompt when the user initially accesses the application.
  request.session.visited = true;

  console.log(request.session);
  console.log(request.session.id)

  response.status(200).send({msg: "Welcome to the application."})
});

export default HomePageRouter;