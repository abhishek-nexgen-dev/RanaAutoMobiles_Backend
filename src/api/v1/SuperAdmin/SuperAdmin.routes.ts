import { Router } from "express";
import SuperAdminController from "./SuperAdmin.controller";

const router = Router();

router.post("/v1/create-admin", SuperAdminController.createAdmin);

export { router as SuperAdminRouter };
