// Login.js
import { message } from 'antd';
import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../vista-cliente/MenuNavegacion/header';
import MenuNav from '../../vista-cliente/sprint2/NavNavegacion/headerNav';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Realiza una solicitud para iniciar sesión
    axios.post('http://localhost:3000/jardinBotanico/inicio-sesion', formData)
      .then(response => {
        console.log('Inicio de sesión exitoso:', response.data);
        navigate('/admin');

       
      })
      .catch(error => {
        message.error('Error al iniciar sesión', error);
        // Limpiar los campos en caso de error
        setFormData({
          email: '',
          password: '',
        });
        
      });
  };

  return (
    <div>
      <Header />
      <MenuNav />
      <h1>Iniciar Sesión</h1>
      <div className='white-container'>
        <form className='registration-form' onSubmit={handleSubmit}>
          <label className="form-label">
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-input" />
          </label>
          <br />
          <label className="form-label">
            Contraseña:
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} className="form-input" />
          </label>
          <br />
          <button type="submit" className="form-button">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
