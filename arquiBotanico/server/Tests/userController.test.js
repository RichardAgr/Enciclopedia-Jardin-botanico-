import express from 'express';
import request from 'supertest';
import userController from '../controllers/userController';
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize({
    host: 'localhost', 
    username: 'root',
    password: '1234',
    database: 'jardin',
    dialect: 'mysql',
  });
  
const app = express();
app.use(express.json());

app.post('/addUser', userController.addUser);

app.post('/loginUser', userController.loginUser);

describe('Pruebas para el controlador de usuarios', () => {
    beforeAll(async () => {
        await sequelize.sync(); 
      });
    
      afterAll(async () => {
        await sequelize.close();
      });
  test('Debería agregar un usuario correctamente', async () => {
    const response = await request(app)
      .post('/addUser')
      .send({ nombre: 'UsuarioPrueba', email: 'test@example.com', password: 'password123' });

    expect(response.statusCode).toBe(200);

  });

  test('Debería iniciar sesión correctamente', async () => {
    const response = await request(app)
      .post('/loginUser')
      .send({ email: 'admin@gmail.com', password: '1234567' });

    expect(response.statusCode).toBe(200);

  });



});
