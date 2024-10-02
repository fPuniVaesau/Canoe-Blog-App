import { Router } from "express";

const LoginRouter = Router();

LoginRouter.get("/", (req, res)=>{
  res.status(200).send({server : "Login Router"})
});

export default LoginRouter;