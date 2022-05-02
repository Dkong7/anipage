import styled from "styled-components";

import imagen from '../../images/anifront.png'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import {Link as LinkR} from 'react-router-dom'


import LogoCard1 from '../../images/Pensiones.png'



export const SuperContenedor = styled.div`
    width:90%;
    position:relative;
    max-width:1112px;
    margin-top:250px;
    display:flex;
    flex-direction: row;
    align-items:center
    justify-content:center;

    

`

export const AniHeaderContenedor = styled.div`
    background: "#0c0c0c";
    display: flex;
    justify-content: center;
    align-items:center;
    padding: 0 30px;
    height: auto;
    width: auto;
    margin-left: -1rem;
    position: relative;
    z-index: 1;

    :before {
        
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index:2;

    }



`
export const Aniheadercontenedorimagen = styled.div`
    position: absolute;
    margin-top: -177px;
    margin-left: 8rem;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        margin-left: 65px
    }

    @media screen and ( max-width: 480px ) {
        margin-left: 51px;
    }


`
export const Imagen = styled.img.attrs({src:`${imagen}`})` 
    width: 98.5%;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;



`

export const Aniheadercontenido = styled.div `
    z-index:3;
    margin-right: 300px;
    max-width:1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 814px) {
        margin-top:-87px;
    }

    @media screen and (max-width: 768px) {
        margin-top: -108px;
        width:405px;

    }
    
    @media screen and (max-width: 520px) {
        padding-right:100px;
    }

    @media screen and ( max-width: 480px ) {
        margin-top: -145px;
        padding-top:33px;
        padding-left:11px;


    }

    

`
export const LinkRouter = styled(LinkR)`

`


export const AniH1 = styled.h1 `
    color: #e8d1d1 ;
    font-size: 48px;
    text-align: center;
    font-family: Aleo;


    @media screen and (max-width: 1107px) {

        font-size: 29px;
    }


    @media screen and (max-width: 814px) {

        font-size: 26px;
    }

    @media screen and (max-width: 768px) {
        font-size: 22px;
    }

    @media screen and (max-width: 520px) {
        font-size: 22px;
    }

    @media screen and ( max-width: 480px ) {
        font-size: 19px;
    }
`

export const AniP = styled.p `

margin-top: 24px;
color: #000;
font-size: 24px;
font-family: Aleo;
text-align: center;
max-width: 600px;

@media screen and (max-width: 768px) {
    font-size: 24px;
}

@media screen and (max-width: 520px) {
    font-size: 17px;
}

@media screen and ( max-width: 480px ) {
    font-size: 14px;
}
`


export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`




export const ContenedorCards = styled.div`

  z-index:2;
  //display:flex;
  display:grid;
  gap: 2rem;
  grid-auto-rows:22rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem,1fr));
  height:100%;
  width:100%;
  //flex-direction: row;
  margin-left: -20px;
  margin-right: -1px;
  margin-top: 420px;


  transform: translateY(-100px);
  margin-bottom: -100px;
  

  
  @media screen and (min-width:20rem){
    grid-auto-rows:15rem;
    margin-left:55px;
    margin-top:240px;
    gap: 0rem;
}
  @media screen and (min-width:40rem){
    gap:0rem;
    margin-top: 311px;
    grid-template-columns: repeat(auto-fit, minmax(10rem,1fr));



}
@media screen and (min-width:510px) and (max-width:639px){ 
  margin-left:6rem;
}
@media screen and (min-width:640px) and (max-width:670px){
    gap:0rem;
    margin-top: 311px;
    grid-template-columns: repeat(auto-fit, minmax(9rem,1fr));



}
@media screen and (min-width:50rem){
    gap:0rem;
    margin-top: 420px;


}
  @media screen and (min-width:60rem){
      gap:2rem;
      margin-top: 420px;
      margin-left:0;


  }

  @media screen and (min-width:70rem){
    margin-top: 33rem;

    gap:1rem;

}

@media screen and (min-width:80rem){
    margin-top: 35rem;
    margin-left

}



`
//mediaqueries para pantalla en rems 
/*
  @media screen and (min-width:20rem){
    width: 40rem;    
    padding-top:241px;

    }
  @media screen and (min-width:40rem){
    width: 55rem;    
    }

  @media screen and (min-width:58rem){
    width: 64rem;

    }
  @media screen and (min-width:70rem){
    width:70rem;

    }

  @media screen and (min-width:78rem){
      width:80rem;


    }
    
*/

export const Card = styled.div `

  width: 14rem;
  height: 14rem;
  align-items:center;
  border-radius:40px;
  padding: 40px 35px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  background: #a79696;
  border-color: #1c2541;
  text-align: center;
  border: 1px solid #e0e0e0;
  transition: ease-in-out .3s;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;

    @media screen and (min-width:20rem){
        padding-top:20px;
        width: 8em;
        height: 8em;
    }
    @media screen and (min-width:40rem){
        padding-top: 20px; 
        width: 7em;
        height: 8em;
    }
    @media screen and (min-width:640px) and (max-width:670px){
       padding-top: 20px;
       width:7em;
       heigth:8em;
    
    
    
    }
    @media screen and (min-width:60rem){
        padding-top: 25px;
        width: 12.5rem;
        height: 12.5rem;
    }
    @media screen and (min-width:70rem){
        padding-top: 30px;
        width: 14rem;
        height: 14rem;
    }
    @media screen and (min-width:80rem){
      padding-top: 30px;

        width: 14rem;
        height: 14rem;
    }


`


export const IconoCard = styled.a `
  
  display: block; 
  box-sizing: border-box;


`

export const SpanIcono = styled.svg`
height: 114px;
width: 136px;
color: #e3cccc;
display: inline-block;
font-size: 134px;
line-height: 1;



`

export const Iconowrap = styled.div`
position:relative;
max-height:120px;
`

export const ImagenIcono = styled.img.attrs({src:`${LogoCard1}`})`

height:7rem;
@media screen and (min-width:20rem){

  height:6rem;
}
@media screen and (min-width:40rem){
    height:5rem;
}
@media screen and (min-width:50rem){
    height:5.5rem;
}
@media screen and (min-width:60rem){
    margin-bottom: 50px;
    height:6rem;
}
@media screen and (min-width:70rem){
    height:6.5rem;
}
@media screen and (min-width:80rem){
    height:7rem;
}

`

export const ContenedorTextoCard1 =styled.div`
    margin-top: 38px;
    display: block;

    @media screen and (min-width:20rem){

        margin-top:20px;
    }
    @media screen and (min-width:40rem){

    }

    @media screen and (min-width:60rem){
        margin-top:0;
    }


`


export const ContenedorTextoCard = styled.div `
  margin-top: 0;
  box-sizing: border-box;
  display: block;
`

export const CardH1 = styled.a `
  color: #e8d1d1 ;
  font-size: 20px;
  font-family:Aleo;
  cursor:pointer;
  line-height: 1.25;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 700;
  &:hover {
    border-bottom: 3px solid #cea6a5;
}

`

export const CardP = styled.p `

    color:#111;
    display:block
    text-align: center;
    font-family:Aleo;
    font-size: 14px;
    line-height: 2;
    font-weight: 300;
    padding: 20px 25px;

    @media screen and (min-width:20rem){
        display:none;
    }
    @media screen and (min-width:40rem){
        display:none;
    }
    @media screen and (min-width:60rem){
        display:block;
        margin-bottom: 50px;
        font-size: 12px;
        padding:5px;
    }
    @media screen and (min-width:70rem){
        display:block;
        font-size:13px;
    }
    @media screen and (min-width:80rem){
        display:block;
    }

`

