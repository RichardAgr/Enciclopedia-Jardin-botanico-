
import { sequelize } from '../config/dbConfig'; 
import modelo from '../models/productModel';

const Product = modelo(sequelize);

const prueba = {
  imagen: 'url_de_la_imagen',
  titulo: 'Nombre del Producto',
  descripcion: 'Descripción del Producto',
};

// Datos de prueba para consultar elementos
const testQuery = "SELECT * FROM productos";

describe('Pruebas para la configuración de la base de datos', () => {
  test('Conectar a la base de datos', async () => {
    try {
      await sequelize.authenticate();
    } catch (error) {
      console.error('Error de conexión:', error);
      throw error;
    }
  });

  test('Sincronizar la base de datos con éxito', async () => {
    const syncResult = await sequelize.sync({ });
    expect(syncResult).toBeDefined();
  });
  test('Agregar un elemento a la base de datos', async () => {
    try {
      const result = await Product.create(prueba);
      console.log('Elemento agregado correctamente:', result.toJSON());
    } catch (error) {
      console.error('Error al agregar un elemento a la base de datos:', error);
      throw error;
    }
  });

  test('Consultar elementos desde la base de datos', async () => {
    try {
      const result = await sequelize.query(testQuery, { type: sequelize.QueryTypes.SELECT });
      console.log('Elementos consultados correctamente:', result);
    } catch (error) {
      console.error('Error al consultar elementos desde la base de datos:', error);
      throw error;
    }
  });
  test('Actualizar un elemento en la base de datos', async () => {
    try {
      const updatedResult = await Product.update({ titulo: 'Nuevo Nombre' }, { where: { id: 1 } });
      expect(updatedResult).toBeDefined();
    } catch (error) {
      console.error('Error al actualizar un elemento en la base de datos:', error);
      throw error;
    }
  });
  
  test('Eliminar un elemento de la base de datos', async () => {
    try {
      const deletedResult = await Product.destroy({ where: { id: 1 } });
      expect(deletedResult).toBeDefined();
    } catch (error) {
      console.error('Error al eliminar un elemento de la base de datos:', error);
      throw error;
    }
  });
  test('Consultar un elemento específico desde la base de datos', async () => {
    try {
      const specificResult = await Product.findByPk(192); // Primer id
      expect(specificResult).toBeDefined();
      console.log('Elemento específico consultado correctamente:', specificResult.toJSON());
    } catch (error) {
      console.error('Error al consultar un elemento específico desde la base de datos:', error);
      throw error;
    }
  });
  
  test('Consultar elementos con condición desde la base de datos', async () => {
    try {
      const conditionalResult = await Product.findAll({ where: { titulo: 'Nombre del Producto' } });
      expect(conditionalResult).toBeDefined();
      console.log('Elementos con condición consultados correctamente:', conditionalResult.map((item) => item.toJSON()));
    } catch (error) {
      console.error('Error al consultar elementos con condición desde la base de datos:', error);
      throw error;
    }
  });
  
  test('Consultar elementos ordenados desde la base de datos', async () => {
    try {
      const orderedResult = await Product.findAll({ order: [['createdAt', 'DESC']] });
      expect(orderedResult).toBeDefined();
      console.log('Elementos ordenados consultados correctamente:', orderedResult.map((item) => item.toJSON()));
    } catch (error) {
      console.error('Error al consultar elementos ordenados desde la base de datos:', error);
      throw error;
    }
  });
  
  test('Consultar elementos paginados desde la base de datos', async () => {
    try {
      const pageSize = 5;
      const currentPage = 1;
      const paginatedResult = await Product.findAll({ limit: pageSize, offset: (currentPage - 1) * pageSize });
      expect(paginatedResult).toBeDefined();
      console.log('Elementos paginados consultados correctamente:', paginatedResult.map((item) => item.toJSON()));
    } catch (error) {
      console.error('Error al consultar elementos paginados desde la base de datos:', error);
      throw error;
    }
  });
  
  test('Realizar consulta compleja desde la base de datos', async () => {
    try {
      const complexQueryResult = await sequelize.query('SELECT * FROM productos WHERE id = :id', {
        replacements: { id: 1 },
        type: sequelize.QueryTypes.SELECT,
      });
      expect(complexQueryResult).toBeDefined();
      console.log('Consulta compleja realizada correctamente:', complexQueryResult);
    } catch (error) {
      console.error('Error al realizar una consulta compleja desde la base de datos:', error);
      throw error;
    }
  });


  afterAll(async () => {
    await sequelize.close();
    console.log('Conexión a la base de datos cerrada correctamente.');
  });
  
});
