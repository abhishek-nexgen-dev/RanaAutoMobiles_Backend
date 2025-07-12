import { Request, Response } from "express";

import JwtUtils from "../../../utils/Jwt.utils";
import userUtils from "../user/user.utils";
import { LoginValidator } from "./Auth.validator";

import AuthConstant from "./Auth.constant";
import StatusCode_Constant from "../../../constant/StatusCode.constant";
import SendResponse from "../../../utils/SendResponse";
import AuthUtils from "./Auth.utils";

class AuthController {
  private genToken(userId: string, role: string): string {
    const payload = { userId, role };
    return JwtUtils.generateToken(payload, "1d"); // Token valid for 1 hour
  }

  private async verifyToken(token: string): Promise<any> {
    return JwtUtils.verifyToken(token);
  }

  async login(req: Request, res: Response) {
    try {
      let { email, password } = LoginValidator.parse(req.body);

      let findUser = await userUtils.findUserByEmail(email);

      let isPasswordValid = AuthUtils.comparePasswords({
        hashedPassword: findUser?.password || "",
        plainPassword: password,
      });

      console.log("isPasswordValid", isPasswordValid);

      if (!findUser) {
        throw new Error("User not found");
      }

      SendResponse.success(
        res,
        StatusCode_Constant.OK,
        AuthConstant.LOGIN_SUCCESS,
        findUser
      );
    } catch (error: any) {
      SendResponse.error(
        res,
        StatusCode_Constant.BAD_REQUEST,
        error.message
      );
    }
  }
}

export default new AuthController();
