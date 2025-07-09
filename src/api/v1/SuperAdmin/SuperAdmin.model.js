"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var SuperAdminSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, default: "SuperAdmin" },
}, { timestamps: true });
exports.default = mongoose_1.default.model("SuperAdmin", SuperAdminSchema);
