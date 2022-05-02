import React, {useState} from 'react'
import { ContenedorTituloContacto, Textoarea, IconoTelefono, UnderlineContacto, Input,Form,  TituloContacto, ContenedorFormulario, Textarea, Button, ContenedorContacto, SuperContenedorContacto} from './FormularioElements';
import { Formik,  Field, ErrorMessage } from 'formik';
import emailjs from '@emailjs/browser';

import { GiCandlestickPhone } from "react-icons/gi";

const Formulario = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  
  function SendEmail(initialValues) {
    emailjs.send("service_etvfbmf", "template_o15kwvg", initialValues,"3xK6nA6_wg4byta3S" )
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
}
  return (
    <SuperContenedorContacto id="Contacto">
    <ContenedorContacto id="ContenedorContacto">
        <ContenedorTituloContacto id="ContenedorTituloContacto">
          <TituloContacto id="titulo-contacteme">•    Mantengamos el contacto    •</TituloContacto>
        </ContenedorTituloContacto>

        <ContenedorFormulario id="contenedorFormulario">
        
        
            <Formik

            initialValues={{
              nombre:'',
              correo:'', 
              mensaje: ''
            }}

            validate={(valores) => {
              let errores = {};
              
              //validacion para nombre
              if(!valores.nombre) {
                errores.nombre = 'Ingrese Su Nombre'
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                errores.nombre = ' El nombre solo puede contener letras y espacios'
              }
              
              //validacion correo

              if(!valores.correo) {
                errores.correo = 'Por favor ingrese un correo electrónico '
              } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                errores.correo = ' El correo solo puede contener letras, numeros, puntos, guione y guion bajo'
              }

              return errores;
            }}


            onSubmit={(valores, {resetForm}) => {
              
                resetForm();
                SendEmail(valores);
                
                console.log('formulario enviado');
                cambiarFormularioEnviado(true);
                setTimeout(()=> cambiarFormularioEnviado(false),3000)



              }}  
            >
              {({ 
                  values, 
                  handleSubmit, 
                  handleChange, 
                  handleBlur,
                  errors,
                  touched, 
                
                }) => (

                <Form id="formulario" onSubmit={handleSubmit}>
                  {console.log(errors)}
                  <Input id='campo-de-nombre'
                    type="text" 
                    id="nombre"
                    name="nombre" 
                    placeholder="Nombre" 

                    />
                    <ErrorMessage name="nombre" component={() => (<div>{errors.nombre}</div>)}/>
                  
                  
                    <Input id='campo-correo'
                    type="email" 
                    name="correo" 
                    placeholder="Correo" 

                    />
                    <ErrorMessage name="correo" component={() => (<div>{errors.correo}</div>)}/>

                  <Textoarea as="textarea" name="mensaje" placeholder="Su Mensaje"             />
                  <Button type="submit">Enviar</Button>
                  {formularioEnviado && <p>Formulario enviado con exito </p>}
                </Form>
              )}
            </Formik>
        </ContenedorFormulario>
    </ContenedorContacto>
      
    </SuperContenedorContacto>
  )
}

export default Formulario


