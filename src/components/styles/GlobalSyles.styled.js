import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
    body{
        font-family: 'Cabin', sans-serif;
        margin: 0;
        padding:0;
        box-sizing: border-box;
        background-color: #FFF5FC;
    }

    button{
        font-family: 'Cabin', sans-serif;
    }

    a{
        text-decoration: none;
    }
    a, a:visited, a:hover, a:active {
        color: inherit;
      }

`

export default GlobalStyles