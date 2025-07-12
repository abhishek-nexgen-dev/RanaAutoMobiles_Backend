import roleConstant from "./role.constant";
import roleModel from "./role.model";

class Role_Utils {
    FIND_ROLE_BY_ID = async (roleId: string) => {
        try {
            const role = await roleModel.findById(roleId);
            if (!role) {
                throw new Error(roleConstant.ROLE_NOT_FOUND);
            }

            return role.name;
        } catch (error: any) {
            throw new Error(`Error finding role: ${error.message}`);
        }
    }
}

export default new Role_Utils();