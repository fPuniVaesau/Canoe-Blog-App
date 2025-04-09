import { response, Router } from "express";
import { query, validationResult, matchedData, checkSchema } from "express-validator";
import NewUserSChema from "../ExpressValidations/NewUserSchema.mjs";
import User from "../MongooseValidations/MongooseSchemas/UserSchema.mjs";

const RegistrationRouter = Router();

RegistrationRouter.get("/", (request, response) => {
  console.log(request.session.id)
  response.send({router: "Registration Router"})
})

// creating a new user profile, we can save the session data.
RegistrationRouter.post("/", checkSchema(NewUserSChema), async (request, response)=>{
  const errorResults = validationResult(request)
  // checks is there are any errors during the post request, validating through users inputs.
  if(!errorResults.isEmpty()){
    return response.status(400).send({credentialsError: errorResults.array()});
  }

  // if no errors, the good data will be used to create a new user.
  const userData = matchedData(request);
  const newUserCreated = await User.create(userData);
  console.log(userData)
  return response.status(201).send({userCredentials: userData});
})

export default RegistrationRouter;