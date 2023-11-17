import Reac, {useState} from 'react'; 
import {Routes, Route} from 'react-router-dom';

import Menu from '../MenuPlantas/menuPlantas';
import Home from '../../Home/BannerPresentacion/BannerPresentacion'

import MyForm from '../../registrarPlanta/registrarPlanta';
import MostrarPlanta from '../../mostrarPlatillo/MostrarPlanta';
//import MostrarPlatillos from '../../MostrarPlatillos/mostrarPlatillos';
//import EditarPlatillos from '../../EditarPlatillo/EditarPlatillo'

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/registrar-planta' element={<MyForm/>}/>
            <Route path='/mostrar-planta/page/:id' element={<MostrarPlanta/>}/>
{/*             <Route path='/menu-platillos' element={<Menu/>}/>
            <Route path='/registrar-platillo' element={<MyForm/>}/>
            <Route path='/mostrar-platillo/page/:id' element={<MostrarPlatillos/>}/>
            <Route path='/editar-platillo/:id' element={<EditarPlatillos/>}/> */}
        </Routes>
    );
}
export default Router; 
