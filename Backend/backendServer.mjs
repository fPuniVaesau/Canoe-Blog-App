import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import AllRoutesRouter from "./Routes/Allroutes.mjs";

const app = express();
const PORT = process.env.PORT || 8000;

const corsOptions = {
    origin: "http://localhost:8000"
};

const mongoDBpassword = process.env.MONGODB_PW;
const connectionString =`mongodb+srv://filovaesau:${mongoDBpassword}@projectcanoe.jcfsi.mongodb.net/?retryWrites=true&w=majority&appName=projectCANOE`;



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions))
app.use(AllRoutesRouter);

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
    res.status(200).send("Server : Filo Vaesau");
});