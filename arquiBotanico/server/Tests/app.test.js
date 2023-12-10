import request from 'supertest';
import app from '../src/app';  

describe('Test', () => {
    test('Debería devolver 200 que es ok', async () => {
        const response = await request(app).get('/jardinBotanico/addProduct').send();
        expect(response.statusCode).toBe(200);
    });
    test('debería manejar los encabezados CORS', async () => {
        const response = await request(app).get('/');
        expect(response.headers['access-control-allow-origin']).toBe('*');
        expect(response.headers['access-control-allow-methods']).toBe(undefined);
      });
    
      test('Deberia encontrar imagenes estaticas', async () => {
        const response = await request(app).get('/Images/1701989972610.jpg');
        expect(response.status).toBe(200);
        // Agrega más expectativas según tu escenario específico
      });
      test('Debería devolver 404 para una ruta inexistente', async () => {
        const response = await request(app).get('/EstaRutaNoExiste');
        expect(response.statusCode).toBe(404);
      });
      test('Debería devolver 404 para una imagen estática inexistente', async () => {
        const response = await request(app).get('/Images/imagenInexistente.jpg');
        expect(response.statusCode).toBe(404);
      });

  });