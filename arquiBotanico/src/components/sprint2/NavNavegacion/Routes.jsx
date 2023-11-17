import Reac, {useState} from 'react'; 
import {Routes, Route} from 'react-router-dom';

import Menu from '../MenuPlantas/menuPlantas';
import Home from '../../Home/BannerPresentacion/BannerPresentacion'

import MyForm from '../../registrarPlanta/registrarPlanta';
import MostrarPlanta from '../../mostrarPlatillo/MostrarPlanta';
import EditarPlanta from '../../editarPlanta/EditarPlanta';


function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/registrar-planta' element={<MyForm/>}/>
            <Route path='/mostrar-planta/page/:id' element={<MostrarPlanta/>}/>
            <Route path='/editar-planta/:id' element={<EditarPlanta/>}/>
{/*             <Route path='/menu-platillos' element={<Menu/>}/>*/}
        </Routes>
    );
}
export default Router; 
