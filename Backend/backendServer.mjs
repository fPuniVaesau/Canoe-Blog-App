import express from "express";
import cors from "cors";
import AllRoutesRouter from "./Routes/Allroutes.mjs";

const app = express();
const PORT = process.env.PORT || 8000;

const corsOptions = {
    origin: "http://localhost:8000"
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions))
app.use(AllRoutesRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

app.get("/", (req, res)=>{
    res.status(200).send("Server : Filo Vaesau");
});