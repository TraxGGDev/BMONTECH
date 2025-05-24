import express from 'express'
import { createProduct, getAllProducts, getProductById } from '../controllers/productController.js';


const router = express.Router();

//crear producto nuevo
router.post('/create', createProduct );
//obtener todos los productos
router.get('/', getAllProducts);
//obtener producto por id
router.get('/:id', getProductById);
export default router;