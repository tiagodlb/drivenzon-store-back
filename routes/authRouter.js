import { Router } from "express";

import { signIn, signUp } from "../controllers/authController.js";

const authRouter = Router();

//login
authRouter.post("/sign-in", signIn);

//cadastro
authRouter.post("/sign-up", signUp);

export default authRouter;
