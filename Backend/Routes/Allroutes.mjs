import { Router } from "express";
import HomePageRouter from "./HomePageRouter.mjs";
import LoginRouter from "./LoginRouter.mjs";
import RegistrationRouter from "./RegisterRouter.mjs";
import BlogRouter from "./BlogsRouter.mjs";

const AllRoutesRouter = Router();

AllRoutesRouter.use("/api/home", HomePageRouter)
AllRoutesRouter.use("/api/login", LoginRouter);
AllRoutesRouter.use("/api/register", RegistrationRouter);
AllRoutesRouter.use("/api/blogs", BlogRouter);

export default AllRoutesRouter;