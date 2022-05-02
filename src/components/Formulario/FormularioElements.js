import styled from 'styled-components';

// Forms, inputs, buttons

export const ContenedorFormulario = styled.div`
  margin: auto 447px;

  @media screen and (min-width:20rem){

    margin: auto 84px;
    margin-top: -13px;

    transition: all 0.3s ease-in-out;

  }
  @media screen and (min-width:40rem){

    margin: auto 147px;
    margin-top: -13px;

    transition: all 0.3s ease-in-out;

  }
  @media screen and (min-width:50rem){

    margin: auto 250px;
    margin-top: -13px;

    transition: all 0.3s ease-in-out;

  }
  @media screen and (min-width:60rem){

    margin: auto 300px;
    margin-top: -13px;

    transition: all 0.3s ease-in-out;

  }
  @media screen and (min-width:70rem){

    margin: auto 394px;
    margin-top: -13px;

    transition: all 0.3s ease-in-out;

  }
  @media screen and (min-width:80rem){

    margin: auto 447px;
    margin-top: -13px
  }



`


export const SuperContenedorContacto = styled.div `
margin-left: -2rem;
`
export const ContenedorTituloContacto = styled.div `
`


export const ContenedorContacto = styled.div`
  margin: 0 auto;
  display: block;
  background: #7d7d7d;


  @media screen and (min-width:20rem){

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
export const Form = styled.form`
  width: 300px;
  padding:10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconoTelefono = styled.div`
height: 114px;
width: 136px;
color: #e3cccc;
display: inline-block;
font-size: 134px;
line-height: 1;
`

export const GiCandlestickPhone = styled.svg `
`

export const Textarea = styled.textarea

export const Input = styled.input`
  background: none;
  border: none;
  font-family:Aleo;
  border-bottom: solid 5px #e0e0e0;
  color: #111;
  font-size: 1.000em;

  font-weight: 400;
  letter-spacing: 1px;
  margin: 0em 0 1.875em 0;
  padding: 0 0 0.875em 0;
  //text-transform: uppercase;
  width: 100%;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #a79696;
    font-family:Aleo;
  }
  :-ms-input-placeholder {
     color: #e0e0e0;
     font-family:Aleo;

  }
`;


export const Textoarea = styled.textarea `
height: 12rem;
width: 26rem;
background: none;
margin-bottom: 50px;
padding:1rem;
border: none;
font-family:Aleo;
border: solid 5px #e0e0e0;

::placeholder,
::-webkit-input-placeholder {
  color: #a79696;
  font-family:Aleo;
}
:-ms-input-placeholder {
   color: #e0e0e0;
   font-family:Aleo;

}


`

export const Button = styled.button`
  width: 300px;
  height: 35px;
  border-radius:50px;
  background-color: #e8d1d1;
  color: #111;
  padding:14px 48px
  font-Family:Aleo;

`;

// Text

export const TituloContacto = styled.h1`
  font-family: Aleo;
  color: #e8d1d1;
  font-size: 38px;
  padding:50px 335px;
  margin-top:0;

  @media screen and (min-width:20rem){
    padding:50px 17px;
    font-size:34px;
  }
  @media screen and (min-width:40rem){
    padding:50px 76px;
  }
  @media screen and (min-width:50rem){
    padding:50px 159px;

    font-size:38px;
  }

  @media screen and (min-width:60rem){
    padding:50px 200px;

    font-size:38px;
  }
  @media screen and (min-width:70rem){
    font-size:35px;
    padding:50px 319px;

    
  }
  @media screen and (min-width:80rem){
    padding:50px 347px;
    font-size:40px;
  }
`;

export const UnderlineContacto = styled.div`
    border-bottom: solid 2px #e8d1d1;
    margin: -2.5120000000000005em auto;
    width: 250px;
`


export const Title2 = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  color: #4d4d4d;
  font-size: 1.8em;
`;

export const Text = styled.p`
  font-family:Aleo;
  color: ${props => props.color || '#4d4d4d'}
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
`;
