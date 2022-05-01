import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll';
import { Nav, 
         NavbarContainer, 
         Logotipo, 
         MobileIcon, 
         NavMenu, 
         NavItem, 
         NavLinks,
         NavBtn,
         NavBtnLink,
         LinkRouter
        
        } from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const [scrollLogo, setScrollLogo] = useState(false);

    //nav
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }else {
            setScrollNav(false)
        }
    }

    

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);


    //logo nav

    
    const changeLogo = () => {
        if(window.scrollY >= 80) {
            setScrollLogo(true)
        }else {
            setScrollLogo(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeLogo)
    }, []);




    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                    <LinkRouter to="/">
                        <Logotipo  onClick={toggleHome} scrollLogo={scrollLogo}></Logotipo>
                    
                    </LinkRouter>
                        <MobileIcon onClick={ toggle }>
                            <FaBars style={{color: '#e3cccc'}}/>
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='QuienSoy' 
                                    smooth={true} duration={500} spy={true} exact='true' offset={-80} 
                                >Quien Soy</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='MiEquipo'
                                    smooth={true} duration={500} spy={true} exact='true' offset={0} 
                                >Mi Equipo</NavLinks>
                            </NavItem>
                            <NavItem>
                                <LinkRouter id="servicios" to='/services'>Servicios</LinkRouter>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='Contacto'
                                    smooth={true} duration={500} spy={true} exact='true' offset={-80} 
                                >Contáctame</NavLinks>
                            </NavItem>

                        </NavMenu>

                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar
