import mongoose, { Document, Schema } from "mongoose";
import { ISuperAdmin } from "./SuperAdmin.type";


const SuperAdminSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, default: "SuperAdmin" },
  },
  { timestamps: true }
);

export default mongoose.model<ISuperAdmin>("SuperAdmin", SuperAdminSchema);
