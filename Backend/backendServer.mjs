import express from "express";
import session from "express-session";
import cors from "cors";
import mongoose, { Mongoose } from "mongoose";
import AllRoutesRouter from "./Routes/Allroutes.mjs";
import cookieParser from "cookie-parser";
import passport from "passport";
import MongoStore from "connect-mongo";
import localeStrategy from "./Strategies/locale-strategy.mjs";
import multer from "multer";
// import discordStrategy from "./Strategies/discord-strategy.mjs";


// express instance
const app = express();
const PORT = process.env.PORT || 8000;

//cors options
const corsOptions = {
    origin: "*",
};

// mongoDB login credentials + connection string
const mongoDBusername = process.env.MONGODB_USER
const mongoDBpassword = process.env.MONGODB_PW;
const connectionString =`mongodb+srv://${mongoDBusername}:${mongoDBpassword}@projectcanoe.jcfsi.mongodb.net/?retryWrites=true&w=majority&appName=projectCANOE`;

// middleware 
app.use(express.json()); //used to format json provided by clients
app.use(cookieParser()); //used for working with cookies for users sessions.
app.use(
  session({
    secret: "blogPostBackend",
    saveUninitialized: false, //Does not save un-motified sessions to session store.
    resave: false,
    cookie: {
      maxAge: 60000 * 10, //sets the life of the cookie
    },
    //by default sessions are saved to local memory, we use mongo-connet to make the session data persistant.
    store: MongoStore.create({
      mongoUrl : connectionString
    })
  })
);
app.use(passport.initialize()) //used for user authentication
app.use(passport.session()) //used for passport.js to use and modify session data.
app.use(express.urlencoded({ extended: false })); //used for client to submit data.
app.use(cors(corsOptions)) //used so other clients can access the server.
app.use(AllRoutesRouter); //container that holds all routers for the API

// connection to the database
mongoose.connect(connectionString)
.then(()=>{
    console.log("Successfully connected to the database.")
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
})
.catch((err) => {
    console.log('unable to connect to the database');
});

app.get("/", (req, res)=>{

    res.status(200).send({
        server : "Canoe | Connected",
    });
});

