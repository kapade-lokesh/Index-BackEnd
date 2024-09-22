import mongoose from "mongoose";

const connecDB=async()=>{
    const connectioninstance = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);
    console.log(connectioninstance.connection.name);
}
export {connecDB}