import React from "react";
import './MenuItem.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';


function MenuItem({ image, name, pagina, id}) {
  const [pagid, setPagid] = useState(null); 

  useEffect(() => {
    async function fetchPlantas() {
      try {
        const response = await fetch(`http://18.116.106.247:3000/obtener_pagina/${pagina}`);

        if (response.ok) {
          const data = await response.json();
          setPagid(data.posicion);
        } else {
          console.error('Error al obtener la planta');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    }

    fetchPlantas();
  }, []);
   
 
  const [hoverTitulo, setHoverTitulo] = useState(false);

  const hoverTrue=()=>{
    setHoverTitulo(true);
  }
  const hoverFalse = () => {
    setHoverTitulo(false);
  }
  
const classImagen = "menuItemImagen " + `${hoverTitulo ? "menuItemTituloHover" :""}`
const urlImagen = 'http://18.116.106.247:3000/media/imagen/' + image.replace(/ /g, "%20")
  return (
    <div className="menuItem">
      <Link to={`/mostrar-planta/page/${pagid}`} className='ItemContenedorImagen'>
        <div className={classImagen}
        style={{ backgroundImage: `url(${urlImagen})` }}> 
        </div>
      </Link>
      <Link to={`/mostrar-planta/page/${pagid}`} className="ItemContenedorTitulo">
        <h3 className="menuItemTitulo"
        onMouseEnter={hoverTrue}
        onMouseLeave={hoverFalse}> {name} </h3>
      </Link>
  </div>
  );
}

export default MenuItem;