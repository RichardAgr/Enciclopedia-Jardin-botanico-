import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { HomeOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './headerNav.css';

const { Header } = Layout;
const { SubMenu } = Menu;

const App2 = () => {
  return (
    <Layout className="layout">
      <Header className="header">
        <Row justify="space-between" align="middle">
          <Col>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="Home">
                <Link to="/" className="menu-icon">
                  <HomeOutlined /> jardin 
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col>
            <Menu theme="dark" mode="horizontal">
              <SubMenu key="InicioSesion" icon={<MenuOutlined />} title="Inicio de Sesión">
                <Menu.Item key="Iniciar Sesion" className={location.pathname === '/inicio' ? 'selected-menu-item' : ''}>
                  <Link to="/inicio" className={`${'menu-icon'} ${'prueba'}`}>
                    Inicio Sesion
                  </Link>
                </Menu.Item>
                <Menu.Item key="Registrarte" className={location.pathname === '/login' ? 'selected-menu-item' : ''}>
                  <Link to="/login" className={`${'menu-icon'} ${'prueba'}`}>
                    Registrarte
                  </Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
        </Row>
      </Header>
    </Layout>
  );
};

export default App2;
