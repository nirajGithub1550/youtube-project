import mongoose from "mongoose";
import dns from "dns";
import {DB_NAME} from "../contants.js";

// Fix for querySrv ECONNREFUSED when using node's c-ares resolver on some networks/OS
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}
export default connectDB