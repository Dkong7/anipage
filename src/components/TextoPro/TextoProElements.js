import styled from "styled-components";

import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';


export const ContainerTextoPro = styled.div`

  width:auto;
  margin top:20px;
  background-color: #7d7d7d;
  padding: 50px;
  max-width: 1200px
  margin-left: 55px important!;
  margin-right: 55px;
  display:grid;
  grid-template-columns: auto auto;



 @media screen and (min-width:20rem){
    padding-top:0;
    transition: all 0.3s ease-in-out;
    width: fit-content;
    margin-left:-2rem;

  }
 @media screen and (min-width:30rem){
   margin-left:-2rem;
   width:25rem;
    padding-top:0;
    transition: all 0.3s ease-in-out;

  }

 @media screen and (min-width:40rem){
  margin-left:-2rem;
  padding-top:0;
  width:43rem;

  transition: all 0.3s ease-in-out;

  }
 @media screen and (min-width:50rem){
  padding-top:0;
  padding-left: 4rem;
  margin-left:-2rem;
  margin-right:0;
  transition: all 0.3s ease-in-out;

}

  @media screen and (min-width:60rem){
    margin-left:-2rem;
    width:65rem;

  }

  @media screen and (min-width:70rem){
    margin-left:-2rem;
    width:68rem;
    

    padding-left: 102px;
  }

  @media screen and (min-width:80rem){
    margin-left: -1rem;
    width: 74.8rem;  
  }







`

export const ContainerElementosRow = styled.div
`
  display: flex;
  flex-direction: row;

  margin-bottom: -30px;
  margin-right: -15px;
  margin-left: -15px;
  box-sizing: border-box;

  


  @media screen and (min-width:20rem){
    flex-direction: column;
    transition: all 0.3s ease-in-out;


  }

 @media screen and (min-width:40rem){
  flex-direction: column;
  transition: all 0.3s ease-in-out;



  }
 @media screen and (min-width:50rem){
  flex-direction: column;
  transition: all 0.3s ease-in-out;

 }


  @media screen and (min-width:60rem){
    flex-direction: row;


  }

  @media screen and (min-width:70rem){
    flex-direction: row;

  }

  @media screen and (min-width:80rem){
    flex-direction: row;

  }





`

export const Columna1 = styled.div`

  flex: 0 0 33.33333%;
  max-width: 33.33333%;
  margin-bottom: 30px;
  

  @media screen and (min-width:20rem){

    max-width:26rem;
  }
  @media screen and (min-width:40rem){
    max-width:36rem;

  }
  @media screen and (min-width:50rem){
    max-width:42rem;
  }

`

export const TituloMayuscula = styled.div`
  position: relative;
  padding-top: 88px;

  


  @media screen and (min-width:20rem){



  }

 @media screen and (min-width:40rem){
 



  }
 @media screen and (min-width:50rem){


  @media screen and (min-width:60rem){


  }

  @media screen and (min-width:70rem){

  }

  @media screen and (min-width:80rem){

    padding-top: 144px; 
    transition: all 0.3s ease-in-out;

  }
`

export const H2TituloMayuscula = styled.h2 `
  color: #e8d1d1;
  font-family: Aleo;
  text-transform: capitalize;
  font-size: 48px;
  line-height: 1.25;


`

export const SpanTituloMayuscula = styled.span `
  color: #ffffff
  font-family: Aleo;

  font-style: italic;
  font-size: 38px;

`

export const Columna2 = styled.div `
  margin-bottom: -10px;
  margin-top:80px;
  width: 100%;





  @media screen and (min-width:20rem){
    margin-top:0


  }

 @media screen and (min-width:40rem){
 
  margin-top:0


  }
 @media screen and (min-width:50rem){
   margin-top:0
 }


  @media screen and (min-width:60rem){
    margin-top:80px;


  }

  @media screen and (min-width:70rem){
    margin-top:80px;

  }

  @media screen and (min-width:80rem){
    margin-top:80px;


  }
  


`

export const TextoP1 = styled.p`
    margin: 0;
    font-size: 24px;
    line-height: 2;
    font-family: Aleo;
    width: 28em;

    font-weight: 300;
    color: black;

    


  @media screen and (min-width:20rem){
    width:16em;



  }

 @media screen and (min-width:40rem){
  width:29em;

  }
 @media screen and (min-width:50rem){
  width: 24em;


 }


  @media screen and (min-width:60rem){
    padding-left: 2rem;
    width: 40rem;
    padding:30px
    padding-top:2rem;
    font-size: 1.3rem;

    transition: all 0.3s ease-in-out;

  }

  @media screen and (min-width:70rem){
    width:46rem;
    padding-top:3rem;
    padding-left:0rem;
    transition: all 0.3s ease-in-out;
    font-size: 22px;


  }

  @media screen and (min-width:80rem){
    width: -webkit-fill-available;
    padding:3rem;
    padding-top:6rem;

    transition: all 0.3s ease-in-out;

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

export const DivBoton = styled.div`
max-width:300px;
margin-left:350px;
margin-top:50px;

`