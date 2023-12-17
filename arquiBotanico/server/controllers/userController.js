
// Importa tu modelo de usuario
import db from '../models/index.js';
import bcrypt from 'bcrypt';

// Crea el modelo de usuario
const User = db.users

// Agrega un usuario
const addUser = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    const user = await User.create({ nombre, email, password });
    res.status(200).send(user);
  } catch (error) {
    console.error('Error al agregar usuario:', error);
    res.status(500).send('Error interno del servidor');
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Busca al usuario por su dirección de correo electrónico
    
    const user = await db.users.findOne({ where: { email: email } });
    
    if (!user) {
      console.log('Usuario no encontrado');
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }
    // Imprimir el usuario específico en la consola
    //console.log('Usuario encontrado:', user);
    //console.log(user.password)
    //Si las contraseñas no coinciden
    if (password != user.password ) {
      console.log('Contraseña incorrecta');
      
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }else{
      if (user.isAdmin == true){
      //Aquí podrías generar un token JWT y enviarlo como respuesta para gestionar la sesión
         res.status(200).send('Inicio de sesión exitoso');
         
        }else{
          return res.status(401).json({ error: 'Acceso denegado' });
        }
      }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).send('Error interno del servidor');
  }
};



// Otras funciones para obtener, actualizar, eliminar usuarios...

export default {
  User,
  addUser,
  loginUser,
};