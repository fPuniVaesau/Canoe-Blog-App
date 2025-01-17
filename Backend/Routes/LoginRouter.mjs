import { Router } from "express";
import { checkSchema, validationResult, matchedData } from "express-validator";
import User from "../MongooseValidations/MongooseSchemas/UserSchema.mjs";
import UserLoginSchema from "../ExpressValidations/UserLoginSchema.mjs";

const LoginRouter = Router();

LoginRouter.get("/", async (request, response)=>{
    console.log("inside the login router.")
    let allUsers = await User.find();
    response.status(200).send(allUsers);
  
})

LoginRouter.post("/", checkSchema(UserLoginSchema), async (request, response)=>{
    const { body } = request;
    console.log(body)
    return response.sendStatus(200);
})

export default LoginRouter;