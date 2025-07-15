import CategoryModel from './Category.model';
import ProductModel from '../Product/Product.model';
import { ICategory } from './Category.type';
import { IProduct } from '../Product/Product.type';

class CategoryUtils {

  async findByName(name: string): Promise<ICategory | null> {
    return await CategoryModel.findOne({ name });
  }


  async findProductsByCategoryName(categoryName: string): Promise<IProduct[]> {
    const category = await CategoryModel.findOne({ name: categoryName }).populate('Products');
    if (!category) {
      throw new Error(`Category with name "${categoryName}" not found`);
    }

    return await ProductModel.find({ category: category.name });
  }

 
}

export default new CategoryUtils();
