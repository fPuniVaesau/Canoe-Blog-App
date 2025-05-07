import passport from "passport";
import { Strategy } from "passport-discord";

const f_clientID = process.env.DISCORD_CLIENTiD;
const f_discordSecret = process.env.DISCORD_SECRET;
const f_scopes = ["identify", "emial", "guilds", "guilds.join", "connections"];
const f_token = process.env.DISCORD_TOKEN;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

export default passport.use( new Strategy(
    {
      clientID: f_clientID,
      clientSecret: f_discordSecret,
      callbackURL: "http://127.0.0.1:8000/api/authentication/discord/redirect",
      scope: f_scopes
    },

    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      done(null, profile);
    }
  )
);