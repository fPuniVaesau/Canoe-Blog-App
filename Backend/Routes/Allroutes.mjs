import { Router } from "express";
import LoginRouter from "./LoginRouter.mjs";

const AllRoutesRouter = Router();

AllRoutesRouter.use("/api/login", LoginRouter);

export default AllRoutesRouter;