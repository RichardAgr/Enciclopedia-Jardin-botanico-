// UserRegistration.js
import { message } from 'antd';
import React, { useState } from 'react';
import axios from 'axios';
import './login.css'; 
import Header from '../../vista-cliente/MenuNavegacion/header';
import MenuNav from '../../vista-cliente/sprint2/NavNavegacion/headerNav';
import { useNavigate } from 'react-router-dom';

const UserRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
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
    if (!formData.nombre || !formData.email || !formData.password) {
      message.error('Por favor, complete todos los campos.');
      return;
    }
    // Realiza una solicitud para registrar el nuevo usuario
    axios.post('http://localhost:3000/jardinBotanico/agregar-usuario', formData)
      .then(response => {
        navigate('/');
        message.success('Usuario Registrado Correctamente')
        
        console.log('Usuario registrado exitosamente:', response.data);
        
      })
      .catch(error => {
        console.log('Usuario registrado no exitosamente:', error.data);
      });
  };

  return (
    <div className="registration-container">
      <Header/>
      <MenuNav/>
      <h1>Registro de Usuario</h1>
      <form className="registration-form" onSubmit={handleSubmit}>
        <label className="form-label">
          Nombre:
          <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} className="form-input" />
        </label>
        <br />
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
        <button type="submit" className="form-button">Registrar</button>
      </form>
    </div>
  );
};

export default UserRegistration;
