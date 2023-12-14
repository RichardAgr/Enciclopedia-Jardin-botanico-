import Reac, {useState} from 'react'; 
import {Routes, Route} from 'react-router-dom';

import Menu from '../MenuPlantas/menuPlantas';
import Home from '../../Home/BannerPresentacion/BannerPresentacion'
import MostrarPlanta from '../../mostrarPlanta/MostrarPlanta';

import Inicio from '../../Login/inicioSesion'
import Registro from '../../Login/login'

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/iniciar-sesion' element={<Inicio/>}/>
            <Route path='/registrarse' element={<Registro/>}/>
            <Route path='/mostrar-planta/page/:id' element={<MostrarPlanta/>}/>
            
        
        </Routes>
    );
}
export default Router; 
