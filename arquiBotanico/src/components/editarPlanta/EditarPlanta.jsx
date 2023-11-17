import { Form, Input, Button, message, Typography, Upload, Modal, Spin } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import './editarPlanta.css';
import { useParams } from 'react-router-dom';

const { Title } = Typography;
const { TextArea } = Input;

export const EditarPlanta = () =>{
  const [imageUploaded, setImageUploaded] = useState(false);
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const [irModalEditar, setModalEditar] = useState(false);
  //Implementados por mi
  const [bandTitulo, setBandTitulo] = useState(false);
  const [bandDescripcion, setBandDescripcion] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rutaImagen,setRutaImagen] = useState("");
  const [nombreImagen,setNombreImagen] = useState("");
  const [datoImagen,setDatoImagen] = useState(null);
  const [idPlanta,setIdPlanta] = useState("");
  const {id} = useParams(); //Obtengo el id con el useParams
  const [keyImagen,setKeyImagen] = useState(false);
  const [plantaData, setPlantaData] = useState({
    nombre: '',
    descripcion: '',
    imagen: '',
    identificador: '',
  });

  //El useEffect se ejecuta cuando ni bien la pagina carga
  useEffect(() => {
    setKeyImagen(false);
    setBandTitulo(false); //Bandera que me ayudan a evitar que me pidan de entrada titulo cuando este ya esta definido por default
    setBandDescripcion(false); //Bandera que me ayudan a evitar que me pidan de entrada descripcion cuando este ya esta definido por default
    //Obtengo el planta con el id indicado

    axios.get(`${id}`)
      .then((response) => {
        console.log(response.data.respuesta);
        const planta = response.data.respuesta;
        setText(planta.nombre);
        setText2(planta.descripcion);
        setNombreImagen(planta.imagen);
        setIdPlanta(planta.id);
        setPlantaData({
          nombre: planta.nombre,
          descripcion: planta.descripcion,
          imagen: planta.imagen,
          identificador: planta.id,
        });
        setRutaImagen('' + planta.imagen);
      })
      .catch((error) => {
        console.error('Error al obtener la planta:', error);
      });

      axios.get('' + nombreImagen)
      .then((response) => {
        setDatoImagen(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener el planta:', error);
      });      

  }, [id]);
  
  const showModal = () => {
    setCancelModalVisible(true);
  };

  const showModalEditar = () => {
    setModalEditar(true);
  };

  const cancelOk = () => {
    // aqui viene el redireccionamiento
    setCancelModalVisible(false);
  };

  const handleTextChange = (e) => {
    setBandTitulo(true);
    const newText = e.target.value;
    setText(newText);
  };

  const handleTextChange2 = (e) => {
    setBandDescripcion(true);
    const newText2 = e.target.value;
    setText2(newText2);
  };

  const verificarImagen = {
    beforeUpload: (file) => {
      let extension = file.name.split('.');
      extension = extension[extension.length-1].toLowerCase();
      if (extension!='jpg' && extension!='png') {
        message.error('Formato de imágen no válido');
        return true;
      }else if (file.size > 6000000) {
        message.error('El tamaño de la imagen no puede exceder 6MB');
      }else if(file.size < 100000){
        message.error('El tamaño de la imagen no puede ser menor a 100 KB');
      }else {
        setImageUploaded(true);
        setKeyImagen(true)
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


  //Se ejecuta cuando se da a actualizar
const onFinish = async (values) => {
  if(keyImagen === true){
    setIsLoading(true);
    try {
      //Cargo los datos de los inputs para poder subirlo a la bd
      const formData = new FormData();
      formData.append('nombre', values.titulo ?? text);
      formData.append('descripcion', values.descripcion ?? text2);
      formData.append('id', plantaData.identificador);
      const imagenFile = values.imagen.file;
      formData.append('imagen', new Blob([imagenFile], { type: imagenFile.type }), imagenFile.name);
      console.log(formData);
      console.log('Realizando llamada');
      const response = await axios.put(`/${plantaData.identificador}`,formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Llega la llamada');
      console.log(response);
      if (response.status === 200) {
        /* message.success('Planta actualizado correctamente'); */
      } else {
        message.error('Error al actualizar el planta');
      }
    } catch (err) {
      message.error('Error con la actualizacion');
      console.log(err);
    }finally{
      setIsLoading(false); //Desactiva la interfaz de carga
      showModalEditar();
    }
  }else{
    message.error(`Verifique que todo los datos esten correctos`);
  }
};


  return (
    <div>
    <div className="titulo-formato" style={{ marginBottom: '30px' }}>Editar Planta</div  >
    <div className='form-contenedor'>
    {isLoading  &&  <Spin size='large' className='antspin'/>}
    <Form onFinish={onFinish}>

      <Form.Item className='componente-limite'
        label={ 
            <span className='item-txt'>Título:</span>
        }
        name="titulo"
        colon={false}
        
        rules = {[
          { required: bandTitulo, message: 'Ingresa el título del planta'},
          { max: 50, message: 'El título no puede tener más de 50 caracteres'},
          { min: 6, message: 'El título debe tener al menos 6 caracteres' },
          { pattern: /^[A-Za-z][a-zA-Z ]*$/, message: 'verifique que no contenga caracteres numericos ó extraños'},
        ]}

        labelCol={{ span: 6 }} // Configura el ancho de la etiqueta

        wrapperCol={{ span: 16 }} // Configura el ancho del campo de entrada
      >
        <div style={{ position: 'relative' }}>
          <Input
            placeholder="Ingrese el título del planta"
            className="input-limited"
            autoComplete="off"
            onChange={handleTextChange}
            value={text}
            maxLength={51}
          />
          <div style={{ position: 'absolute', top: 0, right: 0, padding: '8px', color: 'gray' }}>
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
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 24 }}
      >
        <Upload {...verificarImagen} maxCount={1} accept='image/*'>
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
          { required: bandDescripcion, message: 'Debe añadirse una descripción a la planta' },
          { max: 500, message: 'La descripción no puede tener más de 500 caracteres' },
          { min: 20, message: 'La descripción debe tener al menos 20 caracteres' },
        ]}
        labelCol={{ span: 6 }} // Configura el ancho de la etiqueta
        wrapperCol={{ span: 16 }} // Configura el ancho del campo de entrada
      >
        <div style={{ position: 'relative' }}>
          <Input.TextArea
            placeholder="Ingrese una descripción de la planta"
            autoComplete="off"
            autoSize={{ minRows: 3, maxRows: 6 }}
            onChange={handleTextChange2}
            value={text2}
            maxLength={501}
          />
          <div style={{ position: 'absolute', top: 0, right: 0, padding: '8px', color: 'gray' }}>
            {text2.length} / 500
          </div>
        </div>
      </Form.Item>

      <Form.Item className='componente-limite' 
        labelCol={{span: 6}}
        wrapperCol={{ span: 20 }}
      >
        <div className='contenedorBotones'> 
        <div className='botonAC'>
        <Button type="primary" htmlType="submit" className='button' style={{ backgroundColor: '#096c1b', marginLeft:"10px"}}>
          Actualizar
        </Button> 

        <Button type="primary" htmlType="button" className='button' style={{backgroundColor: '#5a7a60', marginLeft:"20px"}} onClick={showModal}>
          Cancelar
        </Button>
        </div>
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
        title="Se actualizo correctamente,¿Desea ver los cambios?"
        visible={irModalEditar}
        closable={false}
        onCancel={() => setCancelModalVisible(false)} 
        footer={[
          <Link to={`/mostrar-planta/page/${id}`} key="cancel" onClick={() => setModalEditar(false)}>
            <Button key="ok" className='button-link' onClick={() => setCancelModalVisible(false)}>
            Si
          </Button>,
          </Link>,
          <Button key="ok" className='button-link' onClick={() => setModalEditar(false)}>
          No
          </Button>,
        ]}
      > </Modal>


      <Modal
        title="¿Está seguro que desea cancelar?"
        visible={cancelModalVisible}
        onCancel={() => setCancelModalVisible(false)}
        footer={[
          <Link to={`/mostrar-planta/page/${id}`} key="cancel" onClick={() => setCancelModalVisible(false)}>
           <Button key="ok" className='button-link' onClick={() => setCancelModalVisible(false)}>
          Ok
          </Button>,
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

export default EditarPlanta;