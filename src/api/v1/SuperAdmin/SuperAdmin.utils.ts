import SuperAdminModel from "./SuperAdmin.model";

class SuperAdminUtils {
    public static getSuperAdminName(): string {
        return process.env.SuperAdmin_Name || "DefaultSuperAdmin";
    }
    public async FindSuperAdminByEmail(SuperAdmin_Email: string): Promise<any> {
       return await SuperAdminModel.findOne({ email: SuperAdmin_Email });
     }
}

export default new SuperAdminUtils();