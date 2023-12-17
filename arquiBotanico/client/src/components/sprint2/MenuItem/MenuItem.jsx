import React from "react";
import './MenuItem.css'
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';

function MenuItem({ product }) {
  return (
    <div className="menuItem customClass">
      <Card.Img src={`http://localhost:3000/${product.imagen}`} />
      <Card.Body>
        <hr />
        <Card.Title className="titulo ">Titulo: {product.titulo}</Card.Title>
        
        <Link to={`/admin/mostrar-planta/page/${product.id}`}>
          <button className="boton">Editar Planta</button>
        </Link>
      </Card.Body>
    </div>
  );
}

export default MenuItem;
