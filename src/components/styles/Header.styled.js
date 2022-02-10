import styled from "styled-components";


const Header = styled.header`
text-align: center;

div{
   background-color: ${({theme})=> theme.colors.colorTwo};
   width: 80px;
   height: 4px;
   margin: 0 auto;
}
`

export default Header;

//Todo finish styling header section