import mongoose from "mongoose";

const connecDB=async()=>{
    const connectioninstance = await mongoose.connect("mongodb://localhost:27017/Index-DB");
    console.log(connectioninstance.connection.name);
}
export {connecDB}