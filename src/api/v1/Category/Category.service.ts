import { Category_Constant } from './Category.consant';
import CategoryModel from './Category.model';

class Category_Service {
  async createCategory(categoryData: any) {
    try {
      const newCategory = await CategoryModel.create({
        name: categoryData.name,
        description: categoryData.description,
        categoryImage: categoryData.categoryImage,
        isActive: categoryData.isActive || true,
        isPinned: categoryData.isPinned || false,
      });

      if (!newCategory) {
        throw new Error(Category_Constant.CATEGORY_CREATION_FAILED);
      }
      return newCategory;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export default new Category_Service();
