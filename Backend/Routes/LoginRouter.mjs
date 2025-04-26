import { Router } from "express";
import { checkSchema, validationResult, matchedData } from "express-validator";
import User from "../MongooseValidations/MongooseSchemas/UserSchema.mjs";
import UserLoginSchema from "../ExpressValidations/UserLoginSchema.mjs";

// Demo data that we are using to test the api calls; Real data will be pulled from database.
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

// Router Object
const LoginRouter = Router();

//GET request to see all users in database.
LoginRouter.get("/status", async (request, response)=>{
    console.log("checking status of user");
    //find single user in the database
    // change to find user that is attached to the session object.
    let findOneUser = await User.find({username : "filovaesau100" });

    if(!findOneUser) return response.status(400).send({user: "no user found."});
    
    return response.status(200).send({
        user: findOneUser, 
        status: "Registered"
    });
  
})

//if login is successful we can modify the session with the users credentials and save session data.
LoginRouter.post("/", checkSchema(UserLoginSchema), async (request, response)=>{
    const { body } = request;
    const errorResults = validationResult(request);

    if(!errorResults.isEmpty()) return response.status(401).send({errors: errorResults.array()})
    
    const validatedUserCredentials = matchedData(request);
    const foundUserName = validatedUserCredentials.username;
    const foundPassword = validatedUserCredentials.password;
    const foundUser = await User.find({username: foundUserName});

    console.log(foundUser)

    if(!foundUser){
        return response.status(401).send({error: "uesr can not be found at this time."})
    }

    if(foundUser.password !== foundPassword){
        console.log(foundPassword.password);
       return response.status(401).send({error: "password does not match"});
    }

    request.session.verfiedCredentials = true;
    request.session.userCredentials = foundUser;
    console.log(request.session);
    return response.sendStatus(200);
})

export default LoginRouter;