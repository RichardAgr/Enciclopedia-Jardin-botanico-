import db from '../models/index.js';

// Carga imagen 
import multer from 'multer';
import path from 'path';

// create main Model
const Product = db.products

// 1. Crear planta
const addProduct = async (req, res) => {
    try {
      let info = {
        imagen: req.file.path,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
      };
  
      const product = await Product.create(info);
      res.status(200).send(product);
      console.log(product);
    } catch (error) {
      console.error('Error al agregar producto:', error);
      res.status(500).send('Error interno del servidor');
    }
  };
  
// 2. Obtener todos los productos
const getAllProducts = async (req, res) => {
    try {
      let products = await Product.findAll({});
      res.status(200).send(products);
    } catch (error) {
      console.error('Error al obtener todos los productos:', error);
      res.status(500).send('Error interno del servidor');
    }
  };
  
  // 3. Obtener un solo producto
  const getOneProduct = async (req, res) => {
    try {
      let id = req.params.id;
      let product = await Product.findOne({ where: { id: id } });
      res.status(200).send(product);
    } catch (error) {
      console.error('Error al obtener un solo producto:', error);
      res.status(500).send('Error interno del servidor');
    }
  };
  
  // 4. Actualizar producto
  const updateProduct = async (req, res) => {
    try {
      let id = req.params.id;
  
      const product = await Product.update(req.body, { where: { id: id } });
  
      res.status(200).send(product);
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
      res.status(500).send('Error interno del servidor');
    }
  };
  
  // 5. Eliminar producto por ID
  const deleteProduct = async (req, res) => {
    try {
      let id = req.params.id;
  
      await Product.destroy({ where: { id: id } });
  
      res.status(200).send('Producto eliminado exitosamente');
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      res.status(500).send('Error interno del servidor');
    }
  };
  
  // 8. Controlador de carga de imágenes
  const upload = multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, 'Images');
      },
      filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
      },
    }),
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
      const fileTypes = /jpeg|jpg|png|gif/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
  
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb('Give proper files formate to upload');
    },
  }).single('imagen');
  export default {
    Product,
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    upload,
  };