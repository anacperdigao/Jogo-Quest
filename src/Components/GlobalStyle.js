import {createGlobalStyle} from 'styled-components';
import { rosa } from './UI/variaveis';


export const GlobalStyle = createGlobalStyle`
* {  
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  font-family: 'Kumbh Sans' ,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
    background-color: ${rosa};
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;