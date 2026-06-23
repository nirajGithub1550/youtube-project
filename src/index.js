// import "dotenv/config";
import dotenv from "dotenv";
import dns from "dns";

// Fix for querySrv ECONNREFUSED when using node's c-ares resolver on some networks/OS
dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config({
    path: ".env",
});
import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./contants.js";
import connectDB from "./db/index.js";

// const app = express();
// (async () => {
//     try {
//         if (!process.env.MONGODB_URI) {
//             throw new Error("MONGODB_URI is missing. Add it to .env and restart the server.");
//         }

//         if (!process.env.PORT) {
//             throw new Error("PORT is missing. Add it to .env and restart the server.");
//         }

//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (err) => {
//             console.error("Error connecting to MongoDB:", err);
//             throw err;
//         }   );
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         }  );
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//         throw error;
//     }})();

connectDB();