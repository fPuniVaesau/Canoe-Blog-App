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
RegistrationRouter.post("/new_users", checkSchema(NewUserSChema), async (request, response)=>{
  const errorResults = validationResult(request)
  // checks is there are any errors during the post request, validating through users inputs.

  try {
    const userData = matchedData(request);

    const existingUser = await User.find({username: userData.username});
    
    if(existingUser) return response.status(409).send({error: `username of ${userData.username} already exists.`});

    const newUserCreated = await User.create(userData);
    console.log(userData)
    return response.status(201).send({userCredentials: userData});    
  } catch (error) {
      if (!errorResults.isEmpty()) {
        return response.status(400).send({ credentialsError: errorResults.array() });
      }
  }

  // if no errors, the good data will be used to create a new user.
})

export default RegistrationRouter;