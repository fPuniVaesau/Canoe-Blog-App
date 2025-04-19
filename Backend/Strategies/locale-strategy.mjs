import passport from "passport";
import { Strategy } from "passport-local";

export default passport.use(
  new Strategy(async (username, password, done)=>{
    try {

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