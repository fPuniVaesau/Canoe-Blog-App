import { Router } from "express";
import LoginRouter from "./LoginRouter.mjs";
import SignUpRouter from "./SignUpRouter.mjs";

const AllRoutesRouter = Router();

AllRoutesRouter.use("/api/Login", LoginRouter);
AllRoutesRouter.use("/api/SignUp", SignUpRouter);

export default AllRoutesRouter;