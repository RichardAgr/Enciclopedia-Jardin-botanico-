import React, { useState } from 'react';
import { Layout, Menu} from 'antd';
import { HomeOutlined, UnorderedListOutlined, SearchOutlined, MenuOutlined } from '@ant-design/icons'; // Importa los íconos necesarios
import { Link} from 'react-router-dom';
import Routes from './Routes';
import './headerNav.css'
import { Content } from 'antd/es/layout/layout';

const { Header, Footer } = Layout;
const { SubMenu } = Menu;

const App2 = () => {
  return (
    <Layout className="layout">
      <Header div className="header" >

        <Menu theme="none" mode="horizontal" className='menu'>
        <div className='alMedio'>
          <Menu.Item key="Home" className={`${location.pathname === '/' ? 'selected-menu-item' : ''} ${'menu'}`} > 
          <div className='alMedio'>
            <Link to="/" className='menu-icon'>
              <HomeOutlined /> Inicio
            </Link> 
            </div>
          </Menu.Item>     
          
          <SubMenu theme='dark' className='menu-icon'
          
          title={
              <span>          
                 <UnorderedListOutlined /> Plantas Medicinales
              </span>
            }
            >
            <Menu.Item key="Registrar Planta" className={location.pathname === '/registrar-planta' ? 'selected-menu-item' : ''}>
   
              <Link to="/registrar-planta" className={`${'menu-icon'} ${'prueba'}`}>
                Registrar Planta
              </Link> 
         
            </Menu.Item>
            <Menu.Item key="Mostrar Planta" className={location.pathname === '/mostrar-planta/page/1' ? 'selected-menu-item' : ''}>
              <Link to="/mostrar-planta/page/1" className={`${'menu-icon'} ${'prueba'}`}>
                Mostrar Planta
              </Link> 
            </Menu.Item>
            </SubMenu>
          </div>
          
        </Menu>
      </Header>
          <Content className='content'>
        <Routes/>
      </Content>
    </Layout>
    
  );
};

export default App2;
