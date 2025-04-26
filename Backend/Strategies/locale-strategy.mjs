import passport from "passport";
import { Strategy } from "passport-local";
import User from "../MongooseValidations/MongooseSchemas/UserSchema.mjs";

//this function is responsible for taking the user we validated and storing it into the session.
passport.serializeUser((user, done)=>{
  console.log("Inside Serialize User");
  done(null, user.username)
});

passport.deserializeUser( async (username, done)=>{
  console.log("Inside De-serialize User");
  try {
    const findUser = await User.findOne({username : username});
    if(!findUser) throw new Error("Deserialize: User not found");
    done(null, user);

  } catch (error) {
    done(error, null);
  }
})

//this function is for validating the user.
export default passport.use(
  new Strategy(async (username, password, done)=>{
    console.log("Inside Local Strategy Authenticator");
    try {
      //1. we need to find the user in the mongodb database.
      const foundUser = await User.findOne({username: username});
      console.log(`username: ${username}`);
      console.log(`password: ${password}`);

      
      if(!foundUser) throw new Error("Local Stratedy Authentication: User not found");
      // if(foundUser.password !== password) throw new Error("Passwrod does not match");
      console.log(foundUser.password);
      console.log(foundUser);

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