import { Router } from "express";
import LoginRouter from "./LoginRouter.mjs";

const AllRoutesRouter = Router();

AllRoutesRouter.use("/api/Login", LoginRouter);

export default AllRoutesRouter;