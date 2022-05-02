import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaDiscord, FaYoutube } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import {FooterContainer, 
        FooterWrap, 
        FooterLinksContainer, 
        FooterLinksWrapper, 
        FooterLinkItems, 
        FooterLinkTitle, 
        FooterLink,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        WebsiteRights,
        SocialIcons,
        SocialIconLink} from './FooterElements'


        
function Footer () {

    const toggleHome = () => {
        scroll.scrollToTop();
    }


    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Acerca de nosotros </FooterLinkTitle>
                                <FooterLink to="/">Clases</FooterLink>
                                <FooterLink to="/">Blog</FooterLink>
                                <FooterLink to="/">Foro</FooterLink>
                                <FooterLink to="/">Agenda</FooterLink>
                                <FooterLink to="/">Planes</FooterLink>
                                <FooterLink to="/">Terminos del servicio</FooterLink>
                                <FooterLink to="/">Registrese</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Acerca de nosotros </FooterLinkTitle>
                                <FooterLink to="/">Clases</FooterLink>
                                <FooterLink to="/">Blog</FooterLink>
                                <FooterLink to="/">Foro</FooterLink>
                                <FooterLink to="/">Agenda</FooterLink>
                                <FooterLink to="/">Planes</FooterLink>
                                <FooterLink to="/">Terminos del servicio</FooterLink>
                                <FooterLink to="/">Registrese</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contacto</FooterLinkTitle>
                                <FooterLink to="/">Soporte</FooterLink>
                                <FooterLink to="/">Sponsorship</FooterLink>
                                <FooterLink to="/">Investores</FooterLink>
                                <FooterLink to="/">Fundacion</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Redes Sociales </FooterLinkTitle>
                                <FooterLink to="/">Lobrocara</FooterLink>
                                <FooterLink to="/">Twingo</FooterLink>
                                <FooterLink to="/">Youtroll</FooterLink>
                                <FooterLink to="/">Twicthy</FooterLink>
                                <FooterLink to="/">Fakestagram</FooterLink>
                                <FooterLink to="/">TokiToki</FooterLink>
                                <FooterLink to="/">Discord</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            AniLogo
                        </SocialLogo>
                        <WebsiteRights> developed by D ©    {new Date().getFullYear()}</WebsiteRights>
                         <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Discord">
                                <FaDiscord/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                         </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer 
