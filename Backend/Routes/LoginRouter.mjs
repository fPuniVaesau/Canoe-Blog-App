import { Router } from "express";
import User from "../MongooseValidations/MongooseSchemas/UserSchema.mjs";
import { cookie } from "express-validator";

const LoginRouter = Router();

LoginRouter.get("/", async (request, response)=>{
    console.log("inside the login router.")
    let allUsers = await User.find();
    response.status(200).send(allUsers);
  
})

LoginRouter.post("/", async (request, response)=>{
    const { body } = request;
    console.log(body)
    return response.sendStatus(200);
})

export default LoginRouter;