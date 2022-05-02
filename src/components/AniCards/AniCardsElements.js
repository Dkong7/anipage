import styled from "styled-components";

import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

import {Link as LinkR} from 'react-router-dom'

export const ContenedorGeneralCards = styled.div `


background: #7d7d7d;
margin-left:-2rem;

@media screen and (min-width:20rem){

  padding: 0 1rem;

}
@media screen and (min-width:40rem){

  padding: 0 4rem;

}
@media screen and (min-width:50rem){

  padding: 0 4rem;

}
@media screen and (min-width:60rem){

  padding: 0 4rem;

}

@media screen and (min-width:70rem){

  padding: 0 4rem;

}

@media screen and (min-width:80rem){

  padding: 0 4rem;

}

`

export const LinkRouter = styled(LinkR)`

`
export const ContenedorTituloCards = styled.div`

`
export const Titulazo = styled.p`
  font-family: Aleo !important;
  border-bottom: 3px solid;
  width: 24rem;


`
export const TituloParaCards = styled.div`
color: #e8d1d1;
font-size: 40px;
padding: 5rem 14rem;
margin: 0 auto;

@media screen and (min-width:20rem){
  padding: 2rem 0rem;
  transition: all 0.3s ease-in-out;

}
@media screen and (min-width:40rem){
  padding: 2rem 7rem;
  transition: all 0.3s ease-in-out;

}
@media screen and (min-width:50rem){



}
@media screen and (min-width:60rem){

  padding: 5rem 17rem;
  transition: all 0.3s ease-in-out;

}
@media screen and (min-width:70rem){

  padding: 5rem 20rem;
  transition: all 0.3s ease-in-out;

}
@media screen and (min-width:80rem){

  padding: 5rem 26rem;
  transition: all 0.3s ease-in-out;


}


`
export const ContenedorCards = styled.div`
  max-width:1222px;
  display:flex;
  flex-direction:row;
  padding:30px;
  justify-content:space-around;

  @media screen and (min-width:20rem){
    flex-direction:column;
  }
  @media screen and (min-width:30rem){
    flex-direction:column;
  }
  @media screen and (min-width:40rem){
    flex-direction:row;
  }
  @media screen and (min-width:60rem){
    flex-direction:row;
  }
  @media screen and (min-width:70rem){
    flex-direction:row;
  }
  @media screen and (min-width:80rem){
    flex-direction:row;
  }
`

export const Card = styled.div `

  max-width:350px;
  background:linear-gradient(360deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.6) 111%),linear-gradient(180deg,rgb(214 128 128 / 20%) 0%,transparent 100%);
  overflow:hidden;
  position:relative;
  transform: scale (1.3);
  transition: all 0.3s ease-out;
  margin 1vh;


  &:hover {
    opacity: 0.9;
    transform:scale(1.1) translateY(-20px);
    

  }

  @media screen and (min-width:20rem){
    
  }
  @media screen and (min-width:30rem){
    
  }
  @media screen and (min-width:40rem){
    
  }
  @media screen and (min-width:50rem){

  }
  @media screen and (min-width:60rem){

  }
  @media screen and (min-width:70rem){

  }
  @media screen and (min-width:80rem){

  }


`
//.attrs({src:`${imagen}`})
export const ImagenCard = styled.img`

  max-width:100%;

  display: block;
  opacity: 1;
  transition: all .8s;

  &:hover{
    opacity: .6;


  }


`
export const DescripcionContenedor = styled.div `
  position: absolute;
  background: #a79696;
  padding: 25px;
  left: 0;
  right: 0;
  top: 50%;
  opacity: 0;

  &:hover{
    transform: translateY(-50%);
    transition: ease-in-out .3s;
    will-change: transfrom;
    opacity: .9;
  }
`

export const TituloCard = styled.h3 `
  font-weight: 700;
  cursor: pointer;
  font-size:32px;
  font-family: Aleo;
  margin: 0 0 20px;
  color: ${({TituloLight}) => ( TituloLight ? '#e8d1d1' : '#e8d1d1')};


  &:hover {
    border-bottom: 3px solid #111;
  }

  @media screen and (min-width:40rem){
    font-size:24px;

  }
`

export const DescripcionCard = styled.p `
  color: #111;
  font-family: Aleo;
  display:block;    
  font-size:18px;


  @media screen and (min-width:20rem){
    display:none
    }
  @media screen and (min-width:40rem){
    display:none
  }


  @media screen and (min-width:60rem){
    color:black;
    display:block;
    font-size:16px;

  }
  @media screen and (min-width:70rem){
    color:black;
    display:block;

  }
  @media screen and (min-width:80rem){
    color:black;
    display:block;
    font-size:18px;


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

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    padding-top:30px;

    @media screen and (min-width:20rem){
      width: 158px;

    }
    @media screen and (min-width:30rem){
      width: 137px ;
    }
    @media screen and (min-width:40rem){
      width: 145px;
    }
    @media screen and (min-width:50rem){
      width: 158px;
    }
    @media screen and (min-width:60rem){
      width: 207px;
    }
    @media screen and (min-width:70rem){
      width: 220px;
    }
    @media screen and (min-width:80rem){
      width: 240px;
    }


`

export const SocialIconLink = styled.a`
    color:#111;
    font-size: 24px;
`