import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './recipe.css';
import { Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
/* import {ModalConfirmation} from '../../ModalConfirmation/ModalConfirmation'; */
import { Eliminar } from '../eliminar/Eliminar';
import { Link } from 'react-router-dom';
import '../sprint2/NavNavegacion/headerNav.css'


const Recipe = () => {
    const {id} = useParams();
  const [platilloData, setPlatilloData] = useState({
    nombre: '',
    descripcion: '',
    imagen: '',
    identificador: '',
  });


console.log(platilloData.imagen)
  return (
    
      <div className='reciForma'>
 
        <h2 className="formato-titulo">{platilloData.nombre}</h2>
        <div className="recipe-content">
          <div className='recipe-content-header'>
            <div className="recipe-image">
              <img
                alt="Imagen de la Planta"
              />
            </div>
            <div className="recipe-text">
            </div>
            <div className="recipe-buttons">
            <div className='buttonn'>
              <Link to={`/editar-planta/${id}`}>
                <Button type="primary" onClick={() => console.log('Editar')}>
                <EditOutlined />
                </Button>
            </Link>
            </div>
                    <Eliminar/>
          </div>
          </div>
        
     
      </div>
    </div>

  );
};

export default Recipe; 