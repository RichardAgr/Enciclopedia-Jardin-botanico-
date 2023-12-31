// Importa express y supertest
import express from 'express';
import request from 'supertest';
import router from '../routes/productRouter'; 

const app = express();
app.use('/jardinBotanico/', router);


describe('Pruebas para las rutas de productos', () => {
  test('Deberia responder con 200 al momento de registrar planta', async () => {
    const response = await request(app).get('/jardinBotanico/agregarPlanta');
    expect(response.statusCode).toBe(200);
  });
  test('Debería obtener todos los productos correctamente', async () => {
    const response = await request(app).get('/jardinBotanico/mostrarPlantas');
    expect(response.statusCode).toBe(200);
  });

  test('Debería obtener un producto por ID correctamente', async () => {
    const response = await request(app).get('/jardinBotanico/1');
    expect(response.statusCode).toBe(200);
  });

  test('Debería actualizar un producto por ID correctamente', async () => {
    const response = await request(app)
      .put('/jardinBotanico/1')
      .send();
    expect(response.statusCode).toBe(200);
    
  });

  test('Debería eliminar un producto por ID correctamente', async () => {
    const response = await request(app).delete('/jardinBotanico/1');
    expect(response.statusCode).toBe(200);
   
  });
  test('Debería responder con 404 al intentar actualizar un producto inexistente', async () => {
    const response = await request(app)
        .put('/jardinBotanico/') // ID no existente
        .send();

    expect(response.statusCode).toBe(404);
  });
  test('Deberia responder con 200 al registro de usario', async () => {
    const response = await request(app).get('/jardinBotanico/agregar-usuario');
    expect(response.statusCode).toBe(200);
  });
  test('Deberia responder con 200 al inicio de sesion de un  usario', async () => {
    const response = await request(app).get('/jardinBotanico/inicio-sesion');
    expect(response.statusCode).toBe(200);
  });
  test('Debería responder con 404 al obtener detalles de una planta específica por que esta eliminada', async () => {
    const response = await request(app)
    //Como eliminamos el id uno ya no deberia haber
      .get('/jardinBotanico/detallesPlanta/1');
    expect(response.statusCode).toBe(404);
  });
  test('Debería responder con 404 al obtener detalles de una planta específica por que no hay id', async () => {
    const response = await request(app)
    
      .delete('/jardinBotanico/detallesPlanta/');
    expect(response.statusCode).toBe(500);
  });
});