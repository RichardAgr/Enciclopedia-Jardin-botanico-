import React from "react";
import './MenuItem.css'
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';


function MenuItem({ product }) {
  return (

    <div className="menuItem customClass">
      <Card.Img src={`http://localhost:3000/${product.imagen}`} />
      <Card.Body>
        <Card.Title>Titulo: {product.titulo}</Card.Title>
        <Card.Text>
          Descripcion: {product.descripcion.slice(0, 10)}...
        </Card.Text>
        <Link to={`/admin/mostrar-planta/page/${product.id}`}>
          <button>Detalles</button>
        </Link>
      </Card.Body>
    </div>
  );
}

export default MenuItem;
