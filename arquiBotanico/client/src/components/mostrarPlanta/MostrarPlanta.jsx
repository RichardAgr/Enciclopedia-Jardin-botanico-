import React from 'react';
import Home from './Home';

import './mostrarPlanta.css';
import MenuNav from '../sprint2/NavNavegacion/headerNav'
import Header from '../menuNavegacion/header'

function MostrarPlanta() {
  return (
    <div >
      <Header/>
      <MenuNav/>
      <Home />
    </div>
  );
  
}


export default MostrarPlanta;