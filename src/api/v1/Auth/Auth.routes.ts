import { Router } from "express";
import AuthController from "./Auth.controller";

const router = Router();


router.post("/v1/auth/login", AuthController.login)

router.get('/test', (req, res) => {
    res.status(200).json({ message: "Auth Routes are working!" });
});

export {  router as AuthRoutes };