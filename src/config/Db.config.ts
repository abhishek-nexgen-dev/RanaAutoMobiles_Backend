import mongoose from "mongoose";
import { envConstant } from "../constant/env.constant";


export async function connectDB() {
  try {
    await mongoose.connect(envConstant.MONGO_URI,{
        dbName: "suraj",
        autoIndex: true, // Automatically build indexes
    });
    console.log("MongoDB connected successfully");
  } catch (error: any) {
    console.error("MongoDB connection error:", error.message);
    // process.exit(1);
  }
}
