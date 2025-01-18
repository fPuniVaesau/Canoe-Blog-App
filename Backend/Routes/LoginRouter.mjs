import { Router } from "express";
import { checkSchema, validationResult, matchedData } from "express-validator";
import User from "../MongooseValidations/MongooseSchemas/UserSchema.mjs";
import UserLoginSchema from "../ExpressValidations/UserLoginSchema.mjs";

const demoLoginData = [
    {
        "username": "filo7",
        "password": "testpassword"
    },
    {
        "username": "morgan10",
        "password": "testpassword2"
    },
    {
        "username": "s11",
        "password": "testpassword3"
    }
]

const LoginRouter = Router();

LoginRouter.get("/", async (request, response)=>{
    console.log("inside the login router.")
    let allUsers = await User.find();
    response.status(200).send(allUsers);
  
})

LoginRouter.post("/", checkSchema(UserLoginSchema), async (request, response)=>{
    const { body } = request;
    const errorResults = validationResult(request);

    if(!errorResults.isEmpty()) return response.status(401).send({errors: errorResults.array()})
    
    const validatedUserCredentials = matchedData(request);
    
    const foundUser = demoLoginData.find(user => {
        if(user.username === validatedUserCredentials.username){
            return user
        }
    })

    console.log(foundUser)

    if(!foundUser){
        return response.status(401).send({error: "uesr can not be found at this time."})
    }

    if(foundUser.password !== validatedUserCredentials.password){
       return response.status(401).send({error: "password does not match"});
    }

    request.session.verfiedCredentials = true;
    request.session.userCredentials = validatedUserCredentials;
    console.log(request.session);
    return response.sendStatus(200);
})

export default LoginRouter;