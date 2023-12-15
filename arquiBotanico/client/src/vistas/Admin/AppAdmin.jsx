// /src/vistas/cliente/InicioCliente.js
import Header from '../../components/MenuNavegacion/header';
import MenuNav from '../../components/sprint2/NavNavegacion/headerNav';
import Footer from '../../components/footer/Footer'
import MostrarIntro from '../../components/Home/BannerPresentacion/BannerPresentacion'
import React from 'react';

const InicioAdmin = () => {
  return (
    <div>
      <Header />
    <MenuNav />
    <MostrarIntro/>
    <Footer />
    </div>
  );
};

export default InicioAdmin;
