import React, { useState } from 'react';
import Recipe from './Recipe';
import './recipe.css';

const Home = () => {
  const [showRecipe, setShowRecipe] = useState(false);

  const toggleRecipe = () => {
    setShowRecipe(!showRecipe);
  };

  return (
    <div>
      <h1 className='formato-titulo'>Plantas Medicinales Registradas</h1>
      <Recipe/>
    </div>
    
  );
};

export default Home;
