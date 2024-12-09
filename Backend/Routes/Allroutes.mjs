import { Router } from "express";
import LoginRouter from "./LoginRouter.mjs";
import RegistrationRouter from "./RegisterRouter.mjs";

const AllRoutesRouter = Router();

AllRoutesRouter.use("/api/login", LoginRouter);
AllRoutesRouter.use("api/register", RegistrationRouter);

export default AllRoutesRouter;