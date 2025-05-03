import passport from "passport";
import { Strategy } from "passport-local";
import User from "../MongooseValidations/MongooseSchemas/UserSchema.mjs";
import bcrypt, {compare} from "bcrypt";
import { hashPassword, comparePassword } from "../Utilities/helper.mjs";

//this function is responsible for taking the user we validated and storing it into the session.
passport.serializeUser((user, done)=>{
  console.log("Inside Serialize User");
  // console.log(user);
  done(null, user.id)
});

passport.deserializeUser( async (id, done)=>{
  console.log("Inside De-serialize User");
  try {
    //we search the database for the user by its unique id.
    const findUser = await User.findOne({_id: id});
    //if no user is found, we throw error stating user is not found.
    if(!findUser) throw new Error("Deserialize: User not found");
    //we call the done function as this is middleware so the logic can continue.
    done(null, findUser);

  } catch (error) {
    done(error, null);
  }
})

//this function is for validating the user.
export default passport.use(
  new Strategy(async (username, password, done)=>{
    console.log("Inside Local Strategy Authenticator");
    try {
      //we search the database for the user that matches the username provided by client.
      const foundUser = await User.findOne({username: username});
      //if no user is found then we can throw error stating no user is found.
      if(!foundUser) throw new Error("Local Stratedy Authentication: User not found");
      //we call helper function from helper.mjs file to compare the hashed password to the provided password provided by the client.
      if(!hashPassword(password, foundUser.password )) throw new Error("Passwrod does not match");
      //we call the done function as this is middleware, this continues the logic.
      done(null, foundUser);

    } catch (error) {
      done(error, null)
    }
  })
)

//1. search for the user --> we need to search the mongodb database using the mongoose library. (mongoose methods)
//2. If the user is not found we throw and error.
//3. If the password is not correct we throw and error.
//4. If all cases pass then we can set the user object to the session.