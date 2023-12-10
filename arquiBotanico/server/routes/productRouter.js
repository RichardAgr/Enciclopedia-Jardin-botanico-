
import productController  from '../controllers/productController.js'

import express from 'express';
const router = express.Router();

router.post( '/agregarPlanta',productController.upload , productController.addProduct)

router.get('/mostrarPlantas', productController.getAllProducts)

router.get('/:id', productController.getOneProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)


export default router;
