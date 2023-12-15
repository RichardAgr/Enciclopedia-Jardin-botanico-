import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './headerNav.css';

const { Header } = Layout;
const { SubMenu } = Menu;

const App2 = () => {
  return (
    <Layout className="layout">
      <Header className="header">
        <Menu theme="none" mode="horizontal" className='menu'>
          <Menu.Item key="Home" className={`${location.pathname === '/admin/' ? 'selected-menu-item' : ''} ${'menu'}`}>
            <Link to="/admin" className='menu-icon'>
              <HomeOutlined /> Inicio
            </Link>
          </Menu.Item>

          <SubMenu theme='dark' className='menu-icon'
            title={
              <span>
                <UnorderedListOutlined /> Plantas Medicinales
              </span>
            }
          >
            <Menu.Item key="Registrar Planta" className={location.pathname === '/admin/registrarPlanta' ? 'selected-menu-item' : ''}>
              <Link to="/admin/registrarPlanta" className={`${'menu-icon'} ${'prueba'}`}>
                Registrar Planta
              </Link>
            </Menu.Item>
          </SubMenu>

          {/* Agrega el botón de Logout */}
          <Menu.Item key="Logout" className={location.pathname === '/' ? 'selected-menu-item' : ''}>
              <Link to="/" className={`${'menu-icon'} ${'prueba'}`}>
                Salir
              </Link>
            </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default App2;
