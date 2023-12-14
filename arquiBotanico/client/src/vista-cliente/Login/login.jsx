// UserRegistration.js

import React, { useState } from 'react';
import axios from 'axios';
import './login.css'; // Asegúrate de importar tus estilos

const UserRegistration = () => {
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

    // Realiza una solicitud para registrar el nuevo usuario
    axios.post('http://localhost:3000/jardinBotanico/agregar-usuario', formData)
      .then(response => {
        console.log('Usuario registrado exitosamente:', response.data);
        // Puedes redirigir al usuario a otra página o realizar otras acciones después del registro
      })
      .catch(error => {
        console.error('Error al registrar el usuario:', error);
      });
  };

  return (
    <div className="registration-container">
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
