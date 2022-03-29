import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles'
import { light } from './styles/Themes';
import { Navigation } from 'swiper';


function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
      </ThemeProvider>
    </>
  );
}

export default App;