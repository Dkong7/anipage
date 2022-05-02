import React, {useState} from 'react'
import { 
  ContenedorGeneralCards,
  Card,
  ContenedorCards,
  ImagenCard,
  DescripcionContenedor,
  TituloCard,
  DescripcionCard,          
  ArrowRight,
  Titulazo,      
  ArrowForward,
  SocialIcons,
  SocialIconLink,
  ContenedorTituloCards,
  TituloParaCards,
  LinkRouter


} from './AniCardsElements'


import { Button } from '../ButtonElement';

import { FaFacebook, FaInstagram, FaTwitter, FaDiscord, FaYoutube } from 'react-icons/fa'
import { IoLogoTiktok, IoLogoLinkedin } from "react-icons/io5";



const AniCards = ({id1, id2, id3, backgroundColor,Titulo2 , Titulo1, Titulo3, Descripcion1,Descripcion2, Descripcion3, imagenCard, alt1,alt2,alt3, imagenCard2, imagenCard3 }) => {
  const [hover, setHover] = useState(false)

  const onHover = () => {

      setHover(!hover)
    
    }


  return (

    <ContenedorGeneralCards id="MiEquipo">
    <ContenedorTituloCards id='ContenedorTituloCards'>
      <TituloParaCards id='TituloParaCards'>
        <Titulazo id='Titulazo'>Conozca A Mi Equipo</Titulazo>
      </TituloParaCards>
    </ContenedorTituloCards>
    <ContenedorCards id="contenedor-cards">
    
        <Card id={id1} backgroundColor={backgroundColor}>
          <ImagenCard src={imagenCard} alt={alt1} id="Imagen-Card"/>
          <DescripcionContenedor id="DescripcionContenedor">
            <TituloCard id="TituloCard" to="/services" >{Titulo1}</TituloCard>
            <DescripcionCard id="DescripcionCard">{Descripcion1}</DescripcionCard>

            <SocialIcons id='redesSociales'>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaInstagram/>
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <IoLogoLinkedin/>
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter/>
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Discord">
                <IoLogoTiktok/>
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube/>
            </SocialIconLink>
        </SocialIcons>

          </DescripcionContenedor>
        </Card>

        <Card id={id2} backgroundColor={backgroundColor}>
        <ImagenCard src={imagenCard2} alt={alt2} id="Imagen-Card"/>
        <DescripcionContenedor id="DescripcionContenedor">
          <TituloCard id="TituloCard" >{Titulo2}</TituloCard>
          <DescripcionCard id="DescripcionCard">{Descripcion2}</DescripcionCard>

          <SocialIcons>
          <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook/>
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <IoLogoLinkedin/>
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter/>
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Discord">
              <IoLogoTiktok/>
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Youtube">
              <FaYoutube/>
          </SocialIconLink>
      </SocialIcons>

        </DescripcionContenedor>
      </Card>

      <Card id={id3} backgroundColor={backgroundColor}>
      <ImagenCard src={imagenCard3} alt={alt3} id="Imagen-Card"/>
      <DescripcionContenedor id="DescripcionContenedor">
        <TituloCard id="TituloCard" >{Titulo3}</TituloCard>
        <DescripcionCard id="DescripcionCard">{Descripcion3}</DescripcionCard>

        <SocialIcons id="socialIcons">
        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
            <FaInstagram/>
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
            <IoLogoLinkedin/>
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
            <FaTwitter/>
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label="Discord">
            <IoLogoTiktok/>
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label="Youtube">
            <FaYoutube/>
        </SocialIconLink>
    </SocialIcons>

      </DescripcionContenedor>
    </Card>

        
    </ContenedorCards>



      

      
    </ContenedorGeneralCards>

    
  )
}

export default AniCards
