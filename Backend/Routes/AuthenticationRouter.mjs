import { Router } from "express";
import User from "../MongooseValidations/MongooseSchemas/UserSchema.mjs";
import passport from "passport";
// import UserLoginSchema from "../ExpressValidations/UserLoginSchema.mjs";
// import { checkSchema, validationResult, matchedData, check } from "express-validator";

// Router Object
const authenticationRouter = Router();

//GET request to check if the user is in database & the users status.
authenticationRouter.get("/status", async (request, response)=>{
    console.log("checking status of user");
    if(!request.user) return response.status(401).send({status: "No user logged in."})
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

//Post request used to login in the user
authenticationRouter.post("/login", passport.authenticate("local"), (request, response) => {
    console.log(`Inside the aunthentication endpoint`);
    console.log(request.user);
    return response.status(200).send({status: `login sucessful, welcome ${request.user.username}`});
});

//Post request used to log the user out.
authenticationRouter.post('/logout', (request, response)=>{
    //if no user is logged in we send a status of 401
    if(!request.user) return response.sendStatus(401);

    //if user is logged in we log user out.
    request.logout((error)=>{
        if(error) return response.sendStatus(400);
        return response.status(200).send({status: "logout successful"});
    })

});

export default authenticationRouter;

//Passport modifys the session object for us ✅
//1. We are able to login in with local strategy using username and password saved in the database. ✅
//2. We will work on hashing the passwords to keep them safe
//3. We will work on alternative login methods using Oauth2 login strategies.