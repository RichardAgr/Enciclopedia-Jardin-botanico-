import { Form, Input, Button, message, Typography, Upload, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './registrarPlanta.css';
import Header from '../menuNavegacion/header'
import MenuNav from '../sprint2/NavNavegacion/headerNav'


/* const { Title } = Typography;

const { TextArea } = Input; */
const AddProduct = ({ history }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const addProductHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append('imagen', image);
      formData.append('titulo', title);
      formData.append('descripcion', description);

      // Haciendo la solicitud al server
      const response = await axios.post('/jardinBotanico/agregarPlanta', formData);

      // Verificando la respuesta del servidor
      if (response.status === 200) {
        console.log('exito');
      } else {
        console.error('Error al agregar el producto:', response.data);
      }
    } catch (error) {
      // Manejar errores generales
      console.error('Error en la solicitud:', error);
    }
  };
}


function MyForm() {
  const [imageUploaded, setImageUploaded] = useState(false);

  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [cancelModalVisible, setCancelModalVisible] = useState(false);

  const showModal = () => {
    setCancelModalVisible(true);
  };
  const cancelOk = () => {
    // aqui viene el redireccionamiento
    setCancelModalVisible(false);
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  const handleTextChange2 = (e) => {
    const newText2 = e.target.value;
    setText2(newText2);
  };

  const verificarImagen = {
    beforeUpload: (file) => {

      let extension = file.name.split('.');
      extension = extension[extension.length-1].toLowerCase();
      if (extension!='jpeg'&&extension!='jpg'&&extension!='png') {
        message.error('Solo se permite archivos jpg y png.');
        return true;
      } 
      const tam = 6*1024*1024; 
      if (file.size>tam) {
        setImageModalVisible(true);
      } else {
        setImageUploaded(true);
        message.success(`${file.name} subido correctamente.`);
        return false;
      }
      return true;
    },
    onRemove: () => {
      // Lógica para manejar la eliminación de la imagen
      setImageUploaded(false);
      message.warning('Imagen eliminada.');
    },
  };

 

  const buttonStyle = {
    width: '150px', // Tamaño en píxeles
    height: '30px', // Tamaño en píxeles
  };

const onFinish = async (values) => {
  console.log('Finaliza el formulario');
  console.log(values);
  const formData = new FormData();
  try {
    // Obtén los archivos de imagen 
    const imagenFile = values.imagen.file;

    formData.append('titulo', values.titulo);
    // Agrega los archivos al FormData con su nombre y tipo
    formData.append('imagen', new Blob([imagenFile], { type: imagenFile.type }), imagenFile.name);
    
    
    formData.append('descripcion', values.descripcion);

    
    

    console.log('Realizando llamada');
    const response = await axios.post('http://localhost:3000/jardinBotanico/agregarPlanta', formData)

    console.log('Llega la llamada');
    console.log(response);
    if (response.status === 200) {
      message.success('Planta medicinal registrado correctamente');
      
    } else {
      message.error('Error al registrar la planta');
    }
  } catch (err) {
    message.error('Error con el registro');
    console.log(err);
  }
  setText('');
  setText2('');
  verificarImagen.onRemove();
  setImageModalVisible('');
  setImageUploaded('');
};

  return (
    <div>
      <Header/>
      <MenuNav/>
    <div className="titulo-formato">Registrar Planta</div  >
    <div className='formRegistrar'>
    <Form onFinish={onFinish} method="POST" encType='multipart/form-data'>

      <Form.Item className='componente-limite'
        label={ 
            <span className='item-txt'>Título:</span>
        }
        name="titulo"
        colon={false}
        rules={[
          { required: true, message: 'Ingresa el título del planta' },
          { max: 50, message: 'El título no puede tener más de 50 caracteres' },
          { min: 6, message: 'El título debe tener al menos 6 caracteres' },
          { pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]*$/, message: 'Solo son permitidos caracteres alfabeticos en el título' }


        ]}
        labelCol={{ span: 6 }} // Configura el ancho de la etiqueta
        wrapperCol={{ span: 16 }} // Configura el ancho del campo de entrada
      >
        <div style={{ position: 'relative' }}>
          <Input
            placeholder="Ingrese el título del planta"
            autoComplete="off"
            onChange={handleTextChange}
            value={text}
          />
          <div style={{ position: 'relative', top: 0, right: 0, padding: '8px', color: 'gray' }}>
            {text.length} / 50
          </div>
        </div>
      </Form.Item>

      <Form.Item className='componente-limite'
        label={
            <span className='item-txt' onClick={(e)=>{e.preventDefault()}}>Imagen:</span>
        }
        name="imagen"
        colon={false}
        rules={[{ required: true, message: 'No se ha subido ninguna imagen' }]}
        labelCol={{ span: 6 }} // Configura el ancho de la etiqueta
        wrapperCol={{ span: 24 }} // Configura el ancho del campo de entrada
      >
        <Upload {...verificarImagen} maxCount={1}>
          <Button style={buttonStyle} icon={<UploadOutlined />} className='sms'>Subir Imagen</Button>
          {imageUploaded }
          {!imageUploaded && <span className='mensaje-transparenteI'> No se ha seleccionado ningún archivo</span>}
        </Upload>
      </Form.Item>

      <Form.Item className='componente-limite'
        label={
          <span className='item-txt'>Descripción:</span>}
        name="descripcion"
        colon={false}
        rules={[
          { required: true, message: 'Ingrese una descripcion' },
          { max: 500, message: 'La descripción no puede tener más de 500 caracteres' },
          { min: 20, message: 'La descripción debe tener al menos 20 caracteres' },
        ]}
        labelCol={{ span: 6 }} // Configura el ancho de la etiqueta
        wrapperCol={{ span: 16 }} // Configura el ancho del campo de entrada
      >
        <div style={{ position: 'relative' }}>
          <Input.TextArea
            placeholder="Ingrese una descripción del planta"
            autoComplete="off"
            autoSize={{ minRows: 3, maxRows: 6 }}
            onChange={handleTextChange2}
            value={text2}
            //maxLength={500} // Limitar a 500 caracteres
          />
          <div style={{ position: 'relative', top: 0, right: 0, padding: '8px', color: 'gray' }}>
            {text2.length} / 500
      </div>
        </div>
      </Form.Item>
    

      <Form.Item className='componente-limite'
        labelCol={{span: 6}}
        wrapperCol={{ span: 21 }} // Offset para mover el botón
      >
        <div className='contBotones'>
        <Button type="primary" htmlType="submit" className='button' style={{backgroundColor: '#7D0633' }}>
          Registrar
        </Button>
        <Button type="primary" htmlType="button" className='button' style={{backgroundColor: '#828282'}} onClick={showModal}>
          Cancelar
        </Button>
        </div>
      </Form.Item>

      <Modal
        title="Excede el límite de tamaño"
        visible={imageModalVisible}
        onCancel={() => setImageModalVisible(false)}
        footer={[
        ]}
      >
        El archivo de imagen excede el límite de tamaño permitido (6MB).
      </Modal>

      <Modal
        title="¿Está seguro de eliminar el registro?"
        visible={cancelModalVisible}
        onCancel={() => setCancelModalVisible(false)}
        footer={[
          <Link to='/mostrar-planta/page/1' key="cancel" onClick={() => setCancelModalVisible(false)}>
            <Button key="ok" className='button-link' onClick={() => setCancelModalVisible(false)}>
          Ok
          </Button>
          </Link>,
          <Button key="ok" className='button-link' onClick={() => setCancelModalVisible(false)}>
          Cancelar
          </Button>,
        ]}
      >
        Al cancelar, se perdera toda la informacion que no se haya registrado.
      </Modal>
    </Form>
    </div>
    </div>
  );
}

export default MyForm;