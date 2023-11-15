
import React, { useEffect, useState ,useRef } from 'react';
import {  Button} from 'antd';
import "./menuPlantas.css"
import { Link, useLocation } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import MenuItemLista from '../MenuItem/MenuItemLista';
import '../MenuItem/MenuItem.css'


const MenuPlantas= () => {
  const [plantas, setPlantas] = useState([]);


  

    useEffect(() => {
      async function fetchPlantas() {
        try {
          const response = await fetch(`http://18.116.106.247:3000/all`);
          if (response.ok) {
            const data = await response.json();
            setPlantas(data.result);
            console.log(plantas);
          } else {
            console.error('Error al obtener la planta');
          }
        } catch (error) {
          console.error('Error en la solicitud:', error);
        }
      }
  
      fetchPlantas();
    }, []);

    
  return (
    <>
        <div className="menuPlantas">
      <div className="menuList">
      
        {plantas.map((menuItemLista, key) => {
          console.log(key);
          return (
            <MenuItemLista
              key={key} 
              image={menuItemLista.imagen_plantas}
              name={menuItemLista.titulo_plantas}
              id={key+1}
            />
          );
        })}
      </div>
    </div>
   
    </>




  );
};

export default MenuPlantas;








