import { config } from "dotenv";
config();

import mongoose from "mongoose";
import SuperAdminService from "../api/v1/SuperAdmin/SuperAdmin.service";
import { envConstant } from "../constant/env.constant";

// Connect to MongoDB
const MONGO_URI = envConstant.MONGO_URI;

async function main() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    // Create Super Admin (no httpServer needed for script)
    await SuperAdminService.createSuperAdmin();

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
