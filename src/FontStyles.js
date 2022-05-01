import { createGlobalStyle } from "styled-components";
import Avone from '../src/fonts/AVONE.otf'
import Aleo from '../src/fonts/Aleo-Regular.ttf'

const fontStyles = createGlobalStyle`
@font-face {
  font-family: 'Avone';
  src: url(${Avone})

  font-family: 'Aleo'
  src: url(${Aleo})
}


`

export default fontStyles;