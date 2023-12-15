import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/MenuNavegacion/header';
import MenuNav from './components/sprint2/NavNavegacion/headerNav';
import Footer from './components/footer/Footer';
import ListaPlantas from './components/sprint2/MenuPlantas/menuPlantas';
import Login from './vista-cliente/Login/login';
import Inicio from './vista-cliente/Login/inicioSesion';
import AppCliente from './vistas/Cliente/AppCliente'
import AppAdmin from './vistas/Admin/AppAdmin';
import MostrarPlanta from './vista-cliente/mostrarPlanta/MostrarPlanta';
import Registrar from './components/registrarPlanta/registrarPlanta';
import MostrarPlantaAdmin from './components/mostrarPlanta/MostrarPlanta';
import EditarPlantaAdmin from './components/editarPlanta/EditarPlanta';


import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<AppCliente />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path='/mostrar-planta/page/:id' element={<MostrarPlanta/>}/>
          <Route path="/admin/" element={<AppAdmin />} />
          
          <Route path="/admin/registrarPlanta" element={<Registrar />} />
          <Route path="/admin/mostrar-planta/page/:id" element={<MostrarPlantaAdmin />} />
          <Route path="/admin/editar-planta/page/:id" element={<EditarPlantaAdmin />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
