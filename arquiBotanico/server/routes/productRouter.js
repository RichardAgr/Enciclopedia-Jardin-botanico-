
import productController  from '../controllers/productController.js'
import userController  from '../controllers/userController.js'

import express from 'express';
const router = express.Router();

//import { requireAdmin } from '../middleware/tokens.js';


router.post( '/agregarPlanta',productController.upload , productController.addProduct)

router.get('/mostrarPlantas', productController.getAllProducts)

router.get('/:id', productController.getOneProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)

router.post( '/agregar-usuario',userController.addUser)

router.post( '/inicio-sesion',userController.loginUser)


export default router;
