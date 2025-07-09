"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envConstant = void 0;
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.envConstant = {
    PORT: Number(process.env.PORT),
    SuperAdmin_Name: process.env.SuperAdmin_Name || 'SuperAdmin',
    SuperAdmin_Email: process.env.SuperAdmin_Email || '',
    SuperAdmin_Password: process.env.SuperAdmin_Password || '',
    MONGO_URI: process.env.MONGO_URI || '',
    DB_NAME: process.env.DB_NAME || '',
};
console.log('e', exports.envConstant);
