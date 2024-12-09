import { response, Router } from "express";

const RegistrationRouter = Router();

RegistrationRouter.get("/", (request, response) => {
  response.status(201).send({route: "Registration Router"});
})

