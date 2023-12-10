
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
      // Utiliza el modelo que has definido
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

  afterAll(async () => {
    await sequelize.close();
    console.log('Conexión a la base de datos cerrada correctamente.');
  });
  
});
