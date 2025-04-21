import passport from "passport";
import { Strategy } from "passport-local";

export default passport.use(
  new Strategy(async (username, password, done)=>{
    try {
      //1. we need to find the user in the mongodb database.
      const foundUser = await User.findOne({username: username}, ()=>{
        if(!foundUser) throw new Error("User not found");
        if(foundUser.password !== password) throw new Error("Passwrod does not match");
      });
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