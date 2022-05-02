import React, {useState} from 'react'

import {

  ContainerTextoPro,
  ContainerElementosRow,
  Columna1,
  TituloMayuscula,
  H2TituloMayuscula,
  SpanTituloMayuscula,
  Columna2,
  TextoP1,




} from '../TextoPro/TextoProElements'



const TextoPro = () => {



  return (

    
  <ContainerTextoPro id="QuienSoy">
    <ContainerElementosRow id="ContainerElementosRow">
      <Columna1 id="Columna1">
        <TituloMayuscula id="TituloMayuscula">
        <H2TituloMayuscula id="H2TituloMayuscula">Soy Ana García Romero</H2TituloMayuscula>
<SpanTituloMayuscula id="SpanTituloMayuscula">Abogada</SpanTituloMayuscula>
        </TituloMayuscula>
      </Columna1>
      <Columna2 id="Columna2">
        <TextoP1 id="TextoP1">
        Desarrollamos las estrategias de los casos adaptandonos a las necesidades y objetivos específicos de cada cliente. Como su abogada me aseguraré que comprenda la estrategia y las opciones de su caso, para que pueda tomar la decisión correcta.
        </TextoP1>

      </Columna2>
    </ContainerElementosRow>
  
  </ContainerTextoPro>

  )
}

export default TextoPro
