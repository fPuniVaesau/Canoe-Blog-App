import express from "express";
import session from "express-session";
import cors from "cors";
import mongoose, { Mongoose } from "mongoose";
import AllRoutesRouter from "./Routes/Allroutes.mjs";
import cookieParser from "cookie-parser";
import passport from "passport";
import localeStrategy from "./Strategies/locale-strategy.mjs";
import MongoStore from "connect-mongo";

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

//Connect-mongo to create persistant session data
const connectMongoSessionStore = MongoStore.create({
    mongoUrl : connectionString,
    collectionName : "session_c"
})

// middleware 
app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: "blogPostBackend",
    saveUninitialized: false, //Does not save un-motified sessions to session store.
    resave: false, 
    cookie: {
        maxAge: 60000 * 10 //sets the life of the cookie
    }
}))
app.use(passport.initialize()) //used for user authentication
app.use(passport.session())
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions))
app.use(AllRoutesRouter);

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