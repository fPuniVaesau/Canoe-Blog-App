import { response, Router } from "express";
const RegistrationRouter = Router();

RegistrationRouter.get("/", (request, response) => {
  response.send({router: "Registration Router"})
})

export default RegistrationRouter;