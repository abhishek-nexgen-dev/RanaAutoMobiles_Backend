import ProductModel from './Product.model';
import { IProduct } from './Product.type';

class ProductUtils {
  async findById(id: string): Promise<IProduct | null> {
    return await ProductModel.findById(id);
  }

  async searchByName(name: string): Promise<IProduct[]> {
    const searchRegex = new RegExp(name, 'i');
    return await ProductModel.find({
      name: { $regex: searchRegex },
    });
  }

  async getAllProducts(
    page: number = 1,
    limit: number = 10
  ): Promise<{ products: IProduct[]; total: number; totalPages: number }> {
    const skip = (page - 1) * limit;
    const products = await ProductModel.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await ProductModel.countDocuments();
    const totalPages = Math.ceil(total / limit);

    return {
      products,
      total,
      totalPages,
    };
  }
}

export default new ProductUtils();
