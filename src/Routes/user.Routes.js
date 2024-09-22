import { Register } from "../Controller/user.Controller.js";
import { upload } from "../Middleware/multer.Middleware.js";
import express from "express"

const userRouter = express.Router();

userRouter.post("/register", upload.single("image") , Register);

export{userRouter}