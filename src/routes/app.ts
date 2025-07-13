import express from "express";
const app = express();
import { SuperAdminRouter } from "../api/v1/SuperAdmin/SuperAdmin.routes";
import { AuthRoutes } from "../api/v1/Auth/Auth.routes";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use(
    '/api',
    AuthRoutes,
    SuperAdminRouter
)



export default app;
