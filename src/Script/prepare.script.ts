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
   let a =  await SuperAdminService.createSuperAdmin()
console.log(a);
    console.log("Super Admin creation script completed.");
    process.exit(0);
  } catch (error: any) {
    process.exit(1);
  }
}

main();
