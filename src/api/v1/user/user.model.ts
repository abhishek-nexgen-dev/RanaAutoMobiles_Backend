import mongoose, { Schema, Document, Types } from "mongoose";
import { IUser } from "./user.type";


const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, select: false }, // Hide password by default
    role: { type: Schema.Types.ObjectId, ref: "Role", required: true },
  },
  { timestamps: true }
);



export default mongoose.model<IUser>("User", UserSchema);
