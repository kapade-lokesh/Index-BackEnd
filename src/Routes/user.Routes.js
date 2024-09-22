import { Register } from "../Controller/user.Controller.js";
import express from "express"

const userRouter = express.Router();

userRouter.post("/register",Register);

export{userRouter}