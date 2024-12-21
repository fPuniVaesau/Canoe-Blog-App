import { response, Router } from "express";
import { query, validationResult, matchedData, checkSchema } from "express-validator";
import NewUserSChema from "../ExpressValidations/NewUserSchema.mjs";

const RegistrationRouter = Router();

RegistrationRouter.get("/", (request, response) => {
  response.send({router: "Registration Router"})
})

RegistrationRouter.post("/", checkSchema(NewUserSChema), (request, response)=>{
  const errorResults = validationResult(request)
  
  if(!errorResults.isEmpty()){
    return response.status(400).send({credentialsError: errorResults.array()});
  }

  const userData = matchedData(request);
  console.log(userData)
  return response.status(201).send({userCredentials: userData});
})

export default RegistrationRouter;