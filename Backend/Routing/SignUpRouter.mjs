import { Router } from "express";

const SignUpRouter = Router();

SignUpRouter.get("/", (req, res)=>{
  res.status(200).send({server : "Sign up Router"});
})

export default SignUpRouter;