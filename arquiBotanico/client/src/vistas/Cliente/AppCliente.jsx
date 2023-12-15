// /src/vistas/cliente/InicioCliente.js
import Header from '../../vista-cliente/MenuNavegacion/header';
import MenuNav from '../../vista-cliente/sprint2/NavNavegacion/headerNav';
import Footer from '../../vista-cliente/footer/Footer'
import MostrarIntro from '../../vista-cliente/Home/BannerPresentacion/BannerPresentacion'
import MostrarPlantas from '../../vista-cliente/sprint2/MenuPlantas/menuPlantas'
import React from 'react';

const InicioCliente = () => {
  return (
    <div> 
      <Header />
        <MenuNav />
        <MostrarIntro/>
        <Footer />
    </div>
  );
};

export default InicioCliente;
