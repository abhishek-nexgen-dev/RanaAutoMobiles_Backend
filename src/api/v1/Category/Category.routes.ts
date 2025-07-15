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

router.get('/v1/findByName/:name', CategoryController.find_ProductByName);
router.get('/v1/findAllCategories', CategoryController.findAllCategories);

export { router as Category_Router };
