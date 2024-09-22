import express from "express"
import { userRouter } from "./src/Routes/user.Routes.js";
import bodyParser from "body-parser";
import cors from "cors";
import { connecDB } from "./src/DB/connectDB.js";

const app = express();

connecDB();

app.use(cors());
app.use(bodyParser.json());
app.use(userRouter);

app.listen(8080,()=>{
    console.log("server started at 8080");
})