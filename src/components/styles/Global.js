import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

*{
   box-sizing: border-box;
}

body{
   background: ${({theme})=> theme.colors.bgColor};
   font-family: 'Poppins', sans-serif;
}

`

//default export\
export default GlobalStyles;