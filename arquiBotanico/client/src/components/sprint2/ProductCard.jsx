
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    console.log("Ruta de la imagen:", product.imagen);
    return (
        <>

            <Card className='shadow-lg m-2 p-3 rounded' style={{ width: '18rem' }}>
                <Card.Img src={`http://localhost:3000/${product.imagen}`} />        
                <Card.Body>
                    <Card.Title>Title: {product.titulo}</Card.Title>
                    <Card.Title>Price: ${product.cantidad}</Card.Title>
                    <Card.Text>
                        Description: {product.descripcion.slice(0,10)}...
                    </Card.Text>
                 
                    <Link to={`product/${product.id}`}>
                        <button>Detail</button>
                    </Link>
                </Card.Body>

                
               
            </Card>
       
           
        </>
    )
}

export default ProductCard



