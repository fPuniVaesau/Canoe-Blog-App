import { Router } from "express";
import User from "../MongooseValidations/MongooseSchemas/UserSchema.mjs";

const LoginRouter = Router();

LoginRouter.get("/", async (request, response)=>{

    let allUsers = await User.find();
    response.status(200).send(allUsers);
  
})

LoginRouter.post("/", async (request, response)=>{
    
})

export default LoginRouter;