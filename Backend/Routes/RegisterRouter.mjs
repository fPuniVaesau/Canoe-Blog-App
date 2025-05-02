import { response, Router } from "express";
import { query, validationResult, matchedData, checkSchema } from "express-validator";
import NewUserSChema from "../ExpressValidations/NewUserSchema.mjs";
import User from "../MongooseValidations/MongooseSchemas/UserSchema.mjs";
import { hashPassword } from "../Utilities/helper.mjs";

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
    //userData will contain all validated data upon the post request that the user has provided.
    const userData = matchedData(request);

    //We are searching to see if there is a user within the database that the user provided.
    const existingUser = await User.find({username: userData.username});
    
    //if there is a duplicate user in the database we will send bad status code and error message.
    if(existingUser) return response.status(409).send({error: `username of ${userData.username} already exists.`});

    //Before we pass in the data to create the new user we hash the password for added security to the application.
    userData.hashPassword = await hashPassword(userData.hashPassword);
    console.log(userData);

    //We create a new user to add to the database.
    const newUserCreated = await User.create(userData);
    console.log(userData)
    return response.status(201).send({userCredentials: userData});    
  } catch (error) {
      if (!errorResults.isEmpty()) {
        return response.status(400).send({ credentialsError: errorResults.array() });
      }
  }
})

export default RegistrationRouter;