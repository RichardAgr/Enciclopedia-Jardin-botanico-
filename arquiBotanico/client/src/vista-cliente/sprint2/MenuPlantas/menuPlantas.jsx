import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import MenuItem from '../MenuItem/MenuItem';
//import './MenuPlantas.css'; // Asegúrate de importar tus estilos

const MenuPlantas = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsData = async () => {
      const { data } = await axios.get('http://localhost:3000/jardinBotanico/mostrarPlantas');
      console.log(data);
      setProducts(data);
    };
    getProductsData();
  }, []);

  return (
    <Container className="justify-content-center p-2">
      <h1 className='text-al'>Plantas del jardin botanico Martin Cardenas</h1>
      <hr />
        <div className="plantas-container">
            {products.map((product) => (
            <div key={product.id} className="planta-wrapper">
                <div className="planta-item">
                <MenuItem product={product} />
                </div>
            </div>
            ))}
        </div>
    </Container>
  
  );
};

export default MenuPlantas;
