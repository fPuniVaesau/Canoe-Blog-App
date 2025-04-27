import { Router } from "express";
import User from "../MongooseValidations/MongooseSchemas/UserSchema.mjs";
import passport from "passport";
import UserLoginSchema from "../ExpressValidations/UserLoginSchema.mjs";
import { checkSchema, validationResult, matchedData, check } from "express-validator";

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

//Enpoint used to login in the user
LoginRouter.post("/authentication", passport.authenticate("local"), (request, response) => {
    console.log(`Inside the aunthentication endpoint`);
    console.log(request.user);
    return response.sendStatus(200);
});

LoginRouter.post('/authentication/logout', (request, response)=>{
    if(!request.user) return response.sendStatus(401);

    request.logout((error)=>{
        if(error) return response.sendStatus(400);
        return response.status(200).send({logout: "successful"});
    })

});

export default LoginRouter;

//Passport modifys the session object for us
//1. We are able to login in with local strategy using username and password saved in the database.
//2. We will work on hashing the passwords to keep them safe
//3. We will work on alternative login methods using Oauth2 login strategies.