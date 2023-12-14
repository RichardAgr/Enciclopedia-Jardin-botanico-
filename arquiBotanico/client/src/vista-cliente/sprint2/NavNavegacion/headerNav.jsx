import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { HomeOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Routes from './Routes';
import './headerNav.css';
import { Content } from 'antd/es/layout/layout';

const { Header } = Layout;
const { SubMenu } = Menu;

const App2 = () => {
  return (
    <Layout className="layout">
      <Header className="header">
        <Row justify="space-between" align="middle">
          <Col>
            <Menu theme="dark" mode="horizontal" className='menu'>
              <Menu.Item key="Home">
                <Link to="/" className='menu-icon'>
                  <HomeOutlined /> Inicio
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col>
            <Menu theme="dark" mode="horizontal">
              <SubMenu key="InicioSesion" icon={<MenuOutlined />} title="Inicio de Sesión">
               <Menu.Item key="Iniciar Sesion" className={location.pathname === '/iniciar-sesion' ? 'selected-menu-item' : ''}>
   
                <Link to="/iniciar-sesion" className={`${'menu-icon'} ${'prueba'}`}>
                    Inicio Sesion
                </Link> 
          
              </Menu.Item>
              <Menu.Item key="Registrarte" className={location.pathname === '/registrarse' ? 'selected-menu-item' : ''}>
   
                <Link to="/registrarse" className={`${'menu-icon'} ${'prueba'}`}>
                    Registrarte
                </Link> 
          
              </Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
        </Row>
      </Header>

      <Content className='content'>
        <Routes />
      </Content>
    </Layout>
  );
};

export default App2;
