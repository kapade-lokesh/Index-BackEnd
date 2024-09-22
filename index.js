import express from "express"
import { userRouter } from "./src/Routes/user.Routes.js";
import bodyParser from "body-parser";
import cors from "cors";
import { connecDB } from "./src/DB/connectDB.js";
import dotenv from "dotenv"

const app = express();

const port = process.env.PORT || 5000

dotenv.config({path:"/.env"})

connecDB();

app.use(cors());
app.use(bodyParser.json());
app.use(userRouter);

app.listen(port,()=>{
    console.log("server started at 8080");
})