import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom';
import './editarPlanta.css';
import Header from '../menuNavegacion/header'
import MenuNav from '../sprint2/NavNavegacion/headerNav'
const EditProduct = () => {

    const { id } = useParams()
    const navigate = useNavigate();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        const getDataById = async () => {
          const { data } = await axios.get(`http://localhost:3000/jardinBotanico/${id}`);
            setTitle(data.titulo)
            setDescription(data.descripcion)
        }

        getDataById()
    },[id])

   const updateHandler = async (e) => {

        e.preventDefault()
       
        const data = {
            titulo: title,
            descripcion: description,
        }

        await axios.put(`http://localhost:3000/jardinBotanico/${id}`,data);
        navigate('/admin');

   }

    return (
        <>

    <div >
          <Header/>
          <MenuNav/>
          <Container className='mt-5 p-2'>
                <h1>Editar Producto</h1>
              

                <Form className='registration-form' onSubmit={updateHandler}>
                    <Form.Group className="form-input" controlId="titulo">
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                          />
                    </Form.Group>

                    <Form.Group className="form-input" controlId="descripcion">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            as="textarea"
                            />
                    </Form.Group>



                    <Button variant="primary" type="submit" className='form-button'>
                        Update Product
                    </Button>
                </Form>
            </Container>
          
        </div>
            
        </>
    )
}

export default EditProduct
