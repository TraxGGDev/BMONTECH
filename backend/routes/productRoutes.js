import express from 'express'
import { createProduct, getAllProducts, getProductById, updateProduct} from '../controllers/productController.js';


const router = express.Router();

//crear producto nuevo
router.post('/create', createProduct );
//obtener todos los productos
router.get('/', getAllProducts);
//obtener producto por id
router.get('/:id', getProductById);
//actualizar producto
router.put('/:id', updateProduct);

export default router;