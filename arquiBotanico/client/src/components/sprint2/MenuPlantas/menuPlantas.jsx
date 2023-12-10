import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import MenuItem from '../MenuItem/MenuItem';
//import '../MenuItem/MenuItem.css'

const MenuPlantas = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
      const getProductsData = async () => {
          const { data } = await axios.get('http://localhost:3000/jardinBotanico/mostrarPlantas')
          console.log(data)
          setProducts(data)
      }
      getProductsData()
  }, [])

  return (
    <>
       <Container  className="justify-content-center p-2">
           <h1 className='text-al'>Mostrando todas las plantas</h1>
           <hr />

           <Row>
                {
                    products.map(product => {
                        return <Col md={6} lg={4} sm={12} key={product.id}>
                            <MenuItem product={product} />
                        </Col>
                    })
                }
           </Row>


       </Container>

       
    </>
)
}

export default MenuPlantas;