import express from 'express'
import { createProduct, getAllProducts } from '../controllers/productController.js';


const router = express.Router();

//crear producto nuevo
router.post('/create', createProduct );
//obtener todos los productos
router.get('/', getAllProducts);
export default router;