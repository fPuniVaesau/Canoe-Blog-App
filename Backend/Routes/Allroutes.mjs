import { Router } from "express";
import HomePageRouter from "./HomePageRouter.mjs";
import authenticationRouter from "./AuthenticationRouter.mjs";
import RegistrationRouter from "./RegisterRouter.mjs";
import BlogRouter from "./BlogsRouter.mjs";

const AllRoutesRouter = Router();

AllRoutesRouter.use("/api/home", HomePageRouter)
AllRoutesRouter.use("/api/authentication", authenticationRouter);
AllRoutesRouter.use("/api/register", RegistrationRouter);
AllRoutesRouter.use("/api/blogs", BlogRouter);

export default AllRoutesRouter;