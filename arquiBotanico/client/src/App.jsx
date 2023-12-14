import React from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/MenuNavegacion/header'
import MenuNav from './components/sprint2/NavNavegacion/headerNav'
import Footer from './components/footer/Footer'
//import Header from './vista-cliente/MenuNavegacion/header'
//import MenuNav from './vista-cliente/sprint2/NavNavegacion/headerNav'
//import Footer from './vista-cliente/footer/Footer'
import ListaPlantas from './components/sprint2/MenuPlantas/menuPlantas'
import Login from './components/Login/login'
import Inicio from './components/Login/inicioSesion'
function App() {
  return (
    <Router>
    <div className="App">
        <Header />
      <MenuNav />
   
        <Footer /> 
        {/*
        <Login/>
        <Inicio/>
        */}  
      
      
        
     
    </div>
     
    </Router>
  );
}

export default App;