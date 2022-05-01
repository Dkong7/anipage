import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import Logo from '../../images/logoAni1.5x.png'


export const Nav = styled.nav `
    background: ${({scrollNav}) => (scrollNav ? '#a3a3a3' : 'transparent')};
    height: 120px;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index:10;

    @media screen and (max-width:960px) {
        transition:0.8s all ease;
    }
`
export const Logotipo = styled.img.attrs({src:`${Logo}`})`
    justify-self: flex-start;
    cursor: pointer;
    height: ${({scrollLogo}) => ( scrollLogo ? '82px' : '140px')};
    display:flex;
    align-items:center;
    margin-left:25px;

    @media screen and (max-width:960px) {
        transition:0.8s all ease;
        height:90px;
    }
`
export const NavbarContainer = styled.div`
    display:flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width:1100px;

`

export const NavLogo = styled(LinkR)`
 color: #e3cccc;
 justify-self: flex-start;
 cursor: pointer;
 font-size: 1.5rem;
 display:flex;
 align-items:center;
 margin-left:24px;
 font-weight: bold;
 text-decoration:none;
 
`

export const MobileIcon = styled.div`
    display:none;


    @media screen and (max-width: 768px) {
        display:block;
        position:absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 2rem;
        cursor: pointer;
        color: #111
        ;
    }

`
export const FaBars = styled.svg `
color:#e3cccc
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style:none;
    text-align:center;
    margin-right: 22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavItem = styled.li`
    height:80px;
    display: inline-flex;
`

export const NavLinks = styled(LinkS)`
    color:#111;
    display:flex;
    font-family:Aleo;
    align-items:center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor:pointer;

    &.active {
        border-bottom: 3px solid #e3cccc;
    }
`

export const LinkRouter = styled(LinkR)`
color:#111;
display:flex;
font-family:Aleo;
align-items:center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor:pointer;

&.active {
    border-bottom: 3px solid #e3cccc;
}
`

export const NavBtn = styled.nav`
    display:flex;
    align-items:center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #e3cccc;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606:
    }
    
    

`;