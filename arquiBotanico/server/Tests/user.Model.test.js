import { Sequelize } from 'sequelize';
import defineUserModel from '../models/userModel';

const sequelize = new Sequelize({
  host: 'localhost',
  username: 'root',
  password: '1234',
  database: 'jardin',
  dialect: 'mysql',
});

const User = defineUserModel(sequelize);

describe('Pruebas para el modelo de Usuarios', () => {
  beforeAll(async () => {
    await sequelize.sync();
  });

  afterAll(async () => {
    await sequelize.close();
  });

  test('Debería crear un usuario', async () => {
    const userData = {
      nombre: 'Usuario de prueba',
      email: 'prueba@example.com',
      password: 'password123',
      isAdmin: false,
    };

    const user = await User.create(userData);

    expect(user.id).toBeDefined();
    expect(user.nombre).toBe(userData.nombre);
    expect(user.email).toBe(userData.email);
    expect(user.password).toBe(userData.password);
    expect(user.isAdmin).toBe(userData.isAdmin);
  });



  test('Debería encontrar usuarios por isAdmin', async () => {
    const users = await User.findAll({
      where: {
        isAdmin: true,
      },
    });

    expect(users.length).toBeGreaterThan(0);
  });
  test('Debería encontrar un usuario por ID', async () => {
    const usuarioExistente = await User.findOne({ where: { isAdmin: false } });
  
    const usuarioEncontrado = await User.findByPk(usuarioExistente.id);
  
    expect(usuarioEncontrado).toBeDefined();
    expect(usuarioEncontrado.id).toBe(usuarioExistente.id);
  });
  
  test('Debería actualizar la información de un usuario', async () => {
    const usuarioExistente = await User.findOne({ where: { isAdmin: false } });
  
    const nuevasCredenciales = {
      nombre: 'Nuevo Nombre',
      email: 'nuevo@example.com',
      password: 'nuevaContraseña',
    };
  
    await usuarioExistente.update(nuevasCredenciales);
  
    // Obtiene el usuario actualizado
    const usuarioActualizado = await User.findByPk(usuarioExistente.id);
  
    expect(usuarioActualizado).toBeDefined();
    expect(usuarioActualizado.nombre).toBe(nuevasCredenciales.nombre);
    expect(usuarioActualizado.email).toBe(nuevasCredenciales.email);
    expect(usuarioActualizado.password).toBe(nuevasCredenciales.password);
  });
  
  test('Debería eliminar un usuario por ID', async () => {
    const usuarioExistente = await User.findOne({ where: { isAdmin: false } });
  
    await User.destroy({ where: { id: usuarioExistente.id } });
  
    const usuarioEliminado = await User.findByPk(usuarioExistente.id);
  
    expect(usuarioEliminado).toBeNull();
  });

  
  
  
  
});
