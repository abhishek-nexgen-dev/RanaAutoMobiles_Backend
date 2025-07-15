import SendResponse from '../../../utils/SendResponse';
import CategoryService from './Category.service';
import { Request, Response } from 'express';
import { Category_Validator } from './Category.validator';
import FileUpload from '../../../utils/FileUpload'; // Utility class for file uploads
import { ZodError } from 'zod';
import StatusCode_Constant from '../../../constant/StatusCode.constant';
import { Category_Constant } from './Category.consant';

class Category_Controller {
 
  async createCategory(req: Request, res: Response): Promise<void> {
    try {
   
      const { name, description } = Category_Validator.parse(req.body);

      console.log('req.file' , req.file)

      if (!req.file) {
        throw new Error('Category image is required');


    }
     let { originalname } = req.file

      const categoryImage = await FileUpload.uploadFileInBunny(req.file);
      console.log('Uploaded category image URL:', categoryImage);

    //   console.log('Uploaded category image URL:', categoryImage);

    //   // Create the category
    //   const newCategory = await CategoryService.createCategory({
    //     name,
    //     description,
    //     categoryImage,
    //   });

    //   // Send success response
    //   SendResponse.success(
    //     res,
    //     StatusCode_Constant.CREATED,
    //     Category_Constant.CATEGORY_CREATED,
    //     newCategory
    //   );
    } catch (error: any) {
      console.error('Error creating category:', error);

      // Handle Zod validation errors
      if (error instanceof ZodError) {
        const zodMessage = error._zod.def[0].message;
        SendResponse.error(res, StatusCode_Constant.BAD_REQUEST, zodMessage);
      }

      // Handle other errors
      SendResponse.error(
        res,
        StatusCode_Constant.INTERNAL_SERVER_ERROR,
        error.message || 'Failed to create category'
      );
    }
  }
}

export default new Category_Controller();
