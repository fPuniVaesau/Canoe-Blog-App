import { Router } from "express";
import User from "../MongooseValidations/MongooseSchemas/UserSchema.mjs";
import passport from "passport";
import UserLoginSchema from "../ExpressValidations/UserLoginSchema.mjs";
import { checkSchema, validationResult, matchedData, check } from "express-validator";


// Demo data that we are using to test the api calls; Real data will be pulled from database.
// const demoLoginData = [
//     {
//         "username": "filo7",
//         "password": "testpassword"
//     },
//     {
//         "username": "morgan10",
//         "password": "testpassword2"
//     },
//     {
//         "username": "s11",
//         "password": "testpassword3"
//     }
// ]

// Router Object
const LoginRouter = Router();

//GET request to see all users in database.
LoginRouter.get("/authentication/status", async (request, response)=>{
    console.log("checking status of user");
    //find single user in the database
    let x_username = request.user.username;
    // Mongoose method to locate the usernamen in the DB if the username attached to the session obj matches.
    let findOneUser = await User.find({username : x_username });
    // if no user is found we send status 400.
    if(!findOneUser) return response.status(400).send({user: "no user found."});
    // if we find user we return the response to the user with the username that is logged in and status of the user.
    return response.status(200).send({
        user: x_username, 
        status: "Registered"
    });
  
})

LoginRouter.post("/authentication", passport.authenticate("local"), (request, response) => {
    console.log(`Inside the aunthentication endpoint`);
    console.log(request.user);
    return response.sendStatus(200);
});


// if login is successful we can modify the session with the users credentials and save session data.
// LoginRouter.post("/", checkSchema(UserLoginSchema), async (request, response)=>{
//     const { body } = request;
//     const errorResults = validationResult(request);

//     if(!errorResults.isEmpty()) return response.status(401).send({errors: errorResults.array()})
    
//     const validatedUserCredentials = matchedData(request);
//     const foundUserName = validatedUserCredentials.username;
//     const foundPassword = validatedUserCredentials.password;
//     const foundUser = await User.find({username: foundUserName});

//     console.log(foundUser)

//     if(!foundUser){
//         return response.status(401).send({error: "uesr can not be found at this time."})
//     }

//     if(foundUser.password !== foundPassword){
//         console.log(foundPassword.password);
//        return response.status(401).send({error: "password does not match"});
//     }

//     request.session.verfiedCredentials = true;
//     request.session.userCredentials = foundUser;
//     console.log(request.session);
//     return response.sendStatus(200);
// })
export default LoginRouter;