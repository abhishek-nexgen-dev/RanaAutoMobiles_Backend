import { Request, Response } from "express";
import userService from "../user/user.service";
import { UserValidator } from "../user/user.validator";
import SendResponse from "../../../utils/SendResponse";
import SuperAdminConstant from "./SuperAdmin.constant";

class SuperAdminController {
  createAdmin = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, name, password } = UserValidator.parse(req.body);

      const createdAdmin = await userService.createAdmin(name, email, password);

      SendResponse.success(
        res,
        201,
        SuperAdminConstant.ADMIN_CREATED_SUCCESSFULLY,
        createdAdmin
      );
    } catch (error: any) {
      SendResponse.error(
        res,
        error.statusCode || 500,
        error.message || "Internal server error"
      );
    }
  };
}

export default new SuperAdminController();
