import React, { useState, useEffect } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import '../MenuItem/MenuItem.css'
 const ListaPlantas=()=> {
  const [planta, setPlanta] = useState([]);

  return (
    <div className="menuPlanta">
      <div className="menuList">
        {planta.map((menuItem, key) => {
          console.log(menuItem)
          console.log(menuItem.titulo_platillo)
          console.log(menuItem.imagen_platillo)
          return (
            <MenuItem
              key={key}
              image={menuItem.imagen_platillo}
              name={menuItem.titulo_platillo}
              id={key+1}
            />
          );
        })}
      </div>
    </div>
  );
}
export default ListaPlantas;