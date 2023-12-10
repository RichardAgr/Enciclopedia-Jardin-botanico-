import { Sequelize, DataTypes } from 'sequelize';
import defineProductModel from '../models/productModel';

const sequelize = new Sequelize({
    host: 'localhost', 
    username: 'root',
    password: '1234',
    database: 'jardin',
    dialect: 'mysql',
  });
  

const Product = defineProductModel(sequelize);

describe('Pruebas para el modelo de Productos', () => {
  beforeAll(async () => {
    await sequelize.sync(); 
  });

  afterAll(async () => {
    await sequelize.close();
  });

  test('Debería crear un Planta', async () => {
    const datosProducto = {
      imagen: 'imagen_url',
      titulo: 'Producto de prueba',
      descripcion: 'Descripción del producto de prueba',
    };

    const producto = await Product.create(datosProducto);

    expect(producto.id).toBeDefined();
    expect(producto.imagen).toBe(datosProducto.imagen);
    expect(producto.titulo).toBe(datosProducto.titulo);
    expect(producto.descripcion).toBe(datosProducto.descripcion);
  });

  test('debería encontrar un producto por título', async () => {
    const datosProducto = {
      imagen: 'imagen_url_2',
      titulo: 'Otro producto de prueba',
      descripcion: 'Descripción del otro producto de prueba',
    };

    await Product.create(datosProducto);

    const productoEncontrado = await Product.findOne({
      where: { titulo: datosProducto.titulo },
    });

    expect(productoEncontrado).toBeDefined();
    expect(productoEncontrado.imagen).toBe(datosProducto.imagen);
    expect(productoEncontrado.titulo).toBe(datosProducto.titulo);
    expect(productoEncontrado.descripcion).toBe(datosProducto.descripcion);
  });
  
  test('debería fallar al crear un producto sin título', async () => {
    const datosProductoInvalido = {
      imagen: 'imagen_url',
      descripcion: 'Descripción del producto de prueba',
    };
  
    // Debería fallar al intentar crear un producto sin título
    await expect(Product.create(datosProductoInvalido)).rejects.toThrow();
  });
  test('debería encontrar productos por descripción', async () => {
    const productos = await Product.findAll({
      where: {
        descripcion: { [Sequelize.Op.like]: '%prueba%' },
      },
    });
  
    expect(productos.length).toBeGreaterThan(0);
  });

  

});
