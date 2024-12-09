import { Router } from "express";

const RegistrationRouter = Router();

RegistrationRouter.get("/", (req, res) => {
  res.status(201).send({route: "Registration Router"});
})

export default RegistrationRouter;