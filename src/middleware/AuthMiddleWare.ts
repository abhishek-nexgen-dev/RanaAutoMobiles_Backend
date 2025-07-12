import { NextFunction, Request, Response } from "express";
import roleUtils from "../api/v1/role/role.utils";

class AuthMiddleWare {

    async validateSuperAdmin(req: Request, res: Response, next: NextFunction) {
        try {

          
            // let isAdminRole = roleUtils.FIND_ROLE_BY_ID(user.roleId);
            // if (!user || user.role !== 'SuperAdmin') {
            //     return res.status(403).json({ error: "Access denied. SuperAdmin role required." });
            // }
            next();
        } catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}


export default new AuthMiddleWare();