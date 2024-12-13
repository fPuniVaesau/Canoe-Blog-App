import { response, Router } from "express";
const RegistrationRouter = Router();

RegistrationRouter.get("/", (request, response) => {
  response.send({router: "Registration Router"})
})

RegistrationRouter.post("/", (request, response)=>{
  const {body} = request;
  console.log(body)
  return response.send(body)
})

export default RegistrationRouter;