import { Router } from "express";

const LoginRouter = Router();

LoginRouter.get("/", (request, response)=>{
    return response.status(200).send({server: "Filo Vaesau", route: "Login Route"});
})

export default LoginRouter;