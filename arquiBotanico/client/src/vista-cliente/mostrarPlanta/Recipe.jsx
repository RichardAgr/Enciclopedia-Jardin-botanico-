import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../sprint2/NavNavegacion/headerNav.css';
const Recipe = () => {
  const { id } = useParams();
  const [titulo, setTitle] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState('');

  useEffect(() => {
    const getSingleProductData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/jardinBotanico/${id}`);

        console.log(data);
        setTitle(data.titulo);
        setProductDescription(data.descripcion);
        setProductImage(data.imagen);
      } catch (error) {
        console.error('Error al obtener datos de la planta:', error);
      }
    };

    getSingleProductData();
  }, [id]);

  // Resto del código para renderizar la página y manejar acciones (editar, eliminar)...

  return (
    
   <div className="reciForma">
      
      <h2 className="formato-titulo">{titulo}</h2>
      <div className="recipe-content">
        <div className="recipe-content-header">
          <div className="recipe-image">
            <img src={`http://localhost:3000/${productImage}`} alt={`Imagen de ${titulo}`} />
          </div>
          <div className="recipe-text">
            <p>{productDescription}</p>
          </div>
          <div className="recipe-buttons">
            <div className="buttonn">
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
