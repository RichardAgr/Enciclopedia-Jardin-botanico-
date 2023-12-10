import React from "react";
import './MenuItem.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap'



function MenuItem({ product }) {
  const [hoverTitulo, setHoverTitulo] = useState(false);

  const hoverTrue=()=>{
    setHoverTitulo(true);
  }
  const hoverFalse = () => {
    setHoverTitulo(false);
  }
  
const classImagen = "menuItemImagen " + `${hoverTitulo ? "menuItemTituloHover" :""}`

const urlImagen =  `http://localhost:3000/${product.imagen}`//+ image.replace(/ /g, "%20")
  return (
    <div className="menuItem">
      <Link to={`/mostrar-planta/page/${id}`} className='ItemContenedorImagen'>
        <div className={classImagen}
        style={{ backgroundImage: `url(${urlImagen})` }}> 
        </div>
      </Link>
      <Link to={`/mostrar-planta/page/${id}`} className="ItemContenedorTitulo">
        <h3 className="menuItemTitulo"
        onMouseEnter={hoverTrue}
        onMouseLeave={hoverFalse}> {name} </h3>
      </Link>
  </div>
  );
}

export default MenuItem;