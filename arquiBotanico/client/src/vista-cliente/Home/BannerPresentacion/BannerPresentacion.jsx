import React from 'react'
import './BannerPresentacion.css'
import ListaPlatillos from '../../sprint2/MenuPlantas/menuPlantas'
//import ListaPlatillos from '../../sprint2/ListaPlatillos/ListaPlatillos'


const BannerPresentacion = () => {
  return (
    <>
        <div className='banner'>
        <img  src="/src/assets/jardinBotanico.png" alt="sticker" />
        <div className='banner-contenido '>
          <div className='banner-contenedor-titulo'>
            <div className='banner-titulo'>
              <p>Jardin Botanico </p>
              <ul className='banner-titulo-list'>
                <li className="banner-list-item">Martin</li>
                <li className="banner-list-item">Cardenas</li>
              </ul>
            </div>
      </div>
          <p className='banner-descripcion'> <strong>Descripcion o lema </strong>
          El Jardín Botánico Martín Cárdenas surgió como un homenaje al más grande de los botánicos bolivianos Martín Cárdenas Hermosa, nacido en Cochabamba, gran investigador de campo, y fundador de la Facultad de Biología de la Universidad Mayor de San Simón y rector de la misma durante dos gestiones.</p>
        </div>
      </div>
      <ListaPlatillos></ListaPlatillos>

    </>
  )
}
export default BannerPresentacion;
