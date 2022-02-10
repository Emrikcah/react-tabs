import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";



const theme = {
  colors:{
    bgColor: '#f1f5f8',
    colorOne: '#dae2ec',
    colorTwo: '#2caeba',
    colorThree: '#bff8fd',
    colorFour: '#617d98',
    colorFive: '#324d67',
    colorSix: '#102a42',
  }
}

function App() {
   return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles/>
           <Container>
             <Header/>
           </Container>
        </>
      </ThemeProvider>
   );
}

export default App;
