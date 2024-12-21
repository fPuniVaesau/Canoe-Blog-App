import { response, Router } from "express";
import { query, validationResult, matchedData, checkSchema } from "express-validator";
import NewUserSChema from "../ExpressValidations/NewUserSchema.mjs";

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