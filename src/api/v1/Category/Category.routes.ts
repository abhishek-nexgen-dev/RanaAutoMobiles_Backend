import { Router } from 'express';
import AuthMiddleWare from '../../../middleware/AuthMiddleWare';
import CategoryController from './Category.controller';
import FileUpload from '../../../utils/FileUpload';

const router = Router();


router.post(
  '/v1/admin/Category/Create',
  AuthMiddleWare.validateAdmin,
  FileUpload.Multer_Upload.single('categoryImage'), 
  CategoryController.createCategory
);

export { router as Category_Router };
