import React, { useState } from 'react';
import './Login.css';

const Login = () => {

    const [Usuario ,setUsuario] = useState('');
    const [Contraseña ,setContra] = useState('');

    const BotonLogin = (e) =>{
        e.preventDefault();
        console.log('Usuario:', Usuario);
        console.log('Contraseña:', Contraseña);
    
    }  
    const handleUsuarioChange = (e) => {
        setUsuario(e.target.value);
      };
    
      const handleContraseñaChange = (e) => {
        setContra(e.target.value);
      };

  return (
    <div className="login-container">
      <form className="login-form">
        <label className="form-label">Usuario</label>
        <input
          type="text"
          className="form-input"
          value={Usuario}
          onChange={handleUsuarioChange}
        />
        <label className="form-label">Contraseña</label>
        <input
          type="password"
          className="form-input"
          value={Contraseña}
          onChange={handleContraseñaChange}
        />
        <button className="form-button" onClick={BotonLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
