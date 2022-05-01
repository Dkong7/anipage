import React from 'react'
import { SidebarContainer,
         Icon,
         CloseIcon, 
         SidebarWrapper, 
         SidebarMenu,
         Sidebarlink,

    } from './SidebarElements';



function Sidebar({isOpen, toggle}) {
    return (
        <SidebarContainer id="sidebarcontainer" isOpen={isOpen} onClick={toggle}>
            <Icon id="Icon-sidebarcontainer"onClick={toggle}>
                <CloseIcon id="icono-cerrar"/>
            </Icon>
            <SidebarWrapper id="sidebarWrapper">
                <SidebarMenu id="sidebarMenu">
                    <Sidebarlink to="QuienSoy" onClick={toggle}>QuienSoy  </Sidebarlink>
                    <Sidebarlink to="agenda" onClick={toggle}>Mi Equipo</Sidebarlink>
                    <Sidebarlink to="/Services" onClick={toggle}>Servicios</Sidebarlink>
                    <Sidebarlink to="signup" onClick={toggle}>Contacto</Sidebarlink>
                </SidebarMenu>

            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
