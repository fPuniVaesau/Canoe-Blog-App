import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import AllRoutesRouter from "./Routes/Allroutes.mjs";

const app = express();
const PORT = process.env.PORT || 8000;

const corsOptions = {
    origin: "http://localhost:8000"
};

const connectionString =
  "mongodb+srv://filovaesau:585K8168W3Fjhowz@projectcanoe.jcfsi.mongodb.net/?retryWrites=true&w=majority&appName=projectCANOE";

  

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions))
app.use(AllRoutesRouter);

mongoose.connect(connectionString)
.then(()=>{
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
})
.catch((err) => {
    console.log('unable to connect to the database');
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

app.get("/", (req, res)=>{
    res.status(200).send("Server : Filo Vaesau");
});