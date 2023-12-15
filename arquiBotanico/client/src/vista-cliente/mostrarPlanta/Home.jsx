import React, { useState } from 'react';
import Recipe from './Recipe';
import './recipe.css';
import MenuNav from '../../vista-cliente/sprint2/NavNavegacion/headerNav'
import Header from '../../vista-cliente/menuNavegacion/header'
const Home = () => {
  const [showRecipe, setShowRecipe] = useState(false);

  const toggleRecipe = () => {
    setShowRecipe(!showRecipe);
  };

  return (
    <div>
      <Header/>
      <MenuNav/>
      <h1 className='formato-titulo'>Plantas Medicinales Registradas</h1>
      <Recipe/>
    </div>
    
  );
};

export default Home;
