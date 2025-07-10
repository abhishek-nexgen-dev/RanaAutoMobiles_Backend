import { config } from "dotenv";
config();

import mongoose from "mongoose";
import { envConstant } from "../constant/env.constant";
import userService from "../api/v1/user/user.service";

// Connect to MongoDB
const MONGO_URI = envConstant.MONGO_URI;

async function main() {
  try {

    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    // Create Super Admin (no httpServer needed for script)
    let Created_SuperAdmin =  await userService.createSuperAdmin();

    if(!Created_SuperAdmin){
      throw new Error("Failed to create Super Admin");
    }

    console.log("Super Admin creation script completed.");
    process.exit(0);
  } catch (error: any) {
    console.error("Error during Super Admin creation script:", error);
    if (error && error.stack) {
      console.error("Stack trace:", error.stack);
    }
    process.exit(1);
  }
}

main();
