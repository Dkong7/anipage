import React, {useState} from 'react'


import { 
  
         SuperContenedor,
         AniHeaderContenedor, 
         Aniheadercontenedorimagen, 
         Imagen, 
         Aniheadercontenido, 
         AniH1,
         AniP, 
         ArrowRight,
         ArrowForward,
         
         
         ContenedorCards,
         Card,
         IconoCard,
         ContenedorTextoCard,
         ContenedorTextoCard1,
         
         CardH1,
         CardP,
         SpanIcono,
         ImagenIcono,
         Iconowrap,
         LinkRouter
        } from './FrontComponentElements'

import { GiInjustice } from 'react-icons/gi'

import { IoPeopleSharp } from "react-icons/io5";

        
import { Button } from '../ButtonElement';


const FrontComponent = () => {
  
  const [hover, setHover] = useState(false)

  const onHover = () => {

      setHover(!hover)
    
    }



  return (


    <AniHeaderContenedor id="aniheadercontenedor">
    
      <SuperContenedor id="SuperContenedor">

        <Aniheadercontenedorimagen id="contenedor-imagen">
          <Imagen id = "imagen" src='../../images/anifront.png' alt =''>
          </Imagen>
        </Aniheadercontenedorimagen>
        <Aniheadercontenido id="contenedorcontenido">
          <AniH1 id="titulo-header">Ayuda Legal Accesible</AniH1>
          <AniP id="cuerpo-header">Soy Ana García, Abogada, estare muy contenta de apoyarlo y brindarle toda la asistencia legal que requiera su caso</AniP>
          <Button id="Button" to='Contacto' 
          onMouseEnter={onHover} 
          onMouseLeave={onHover}
          primary='true'
          dark='true'
          padding='big'
          smooth={true} 
          duration={500} 
          spy={true} 
          exact='true' 
          offset={0} 

          >
              Charlemos {hover ? <ArrowForward /> : <ArrowRight/>}
            </Button>
          </Aniheadercontenido>


        <ContenedorCards id="contenedorCards">
        

          <Card id="cards1">
          <IconoCard id="IconoCard">
            <Iconowrap id="wrap">
              <ImagenIcono id="imagen"/>          
            </Iconowrap>
          </IconoCard>
          <ContenedorTextoCard1 id="contenedorTextoCard">
          <LinkRouter id='LinkRouter' to='/services'>

            <CardH1 id="CardH1" >Pensiones</CardH1>
          </LinkRouter>

            <CardP id="CardP">Conozca nuestro portafólio de servicios para gestionar y reclamar su derecho a retirarse </CardP>
          </ContenedorTextoCard1>

          
  
        
        </Card>
        <Card id="cards2">
          <SpanIcono>
            <IoPeopleSharp/>          
          </SpanIcono>
        <ContenedorTextoCard id="contenedorTextoCard">
          <CardH1 id="CardH1">Consultorias Privadas </CardH1>
          <CardP id="CardP">Abogamos por nuestros clientes, buscando una resolución justa dentro de plazos razonables </CardP>
        </ContenedorTextoCard>

      
      </Card>

      <Card id="cards3">
      <IconoCard id="IconoCard">
        <SpanIcono>
          <GiInjustice/>          
        </SpanIcono>
      </IconoCard>
      <ContenedorTextoCard id="contenedorTextoCard">
        <CardH1 id="CardH1">Seguros</CardH1>
        <CardP id="CardP">Los temas de seguros requieren un excelente conocimiento y una gran intuición. </CardP>
      </ContenedorTextoCard>

    
    </Card>

      

      
        </ContenedorCards>

        
      
      
      </SuperContenedor>
    </AniHeaderContenedor>
    


    
  )
}

export default FrontComponent
