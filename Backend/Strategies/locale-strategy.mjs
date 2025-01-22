import passport from "passport";
import { Strategy } from "passport-local";

export default passport.use(
  new Strategy(async (username, password, done)=>{

  })
)