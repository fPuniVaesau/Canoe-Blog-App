import passport from "passport";
import { Strategy } from "passport-discord";

const f_clientID = process.env.DISCORD_CLIENTiD;
const f_discordSecret = process.env.DISCORD_SECRET;

passport.use(
  new Strategy(
    {
      clientID: f_clientID,
      clientSecret: f_discordSecret,
      callbackURL: "http://127.0.0.1:8000/api/authentication/discord/redirect",
      //   scope: scopes,
    },
    () => {}
  )
);