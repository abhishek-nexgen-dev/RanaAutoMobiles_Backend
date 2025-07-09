import { envConstant } from "../../../constant/env.constant";
import SuperAdminConstant from "./SuperAdmin.constant";
import SuperAdminModel from "./SuperAdmin.model";
import SuperAdminUtils from "./SuperAdmin.utils";

class SuperAdminService {
  public async createSuperAdmin() {
    let { SuperAdmin_Name, SuperAdmin_Email, SuperAdmin_Password } =
      envConstant;
    try {
      // Check if SuperAdmin already exists
      const existingSuperAdmin = await SuperAdminUtils.FindSuperAdminByEmail(
        SuperAdmin_Email
      );


      if (existingSuperAdmin) {
        throw new Error(SuperAdminConstant.ALREADY_EXISTS);
      }

      // Create new SuperAdmin
      const superAdmin = await SuperAdminModel.create({
        name: SuperAdmin_Name,
        email: SuperAdmin_Email,
        password: SuperAdmin_Password,
      });

      if (!superAdmin) {
        throw new Error(SuperAdminConstant.CREATED_FAILED);
      }

      return superAdmin;
    } catch (error: any) {
        throw new Error(error.message || SuperAdminConstant.INTERNAL_SERVER_ERROR);
     
    }
  }
}

export default new SuperAdminService();
