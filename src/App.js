import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles'
import { light } from './styles/Themes';
import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Resume from './components/sections/Resume';
import BrandStatement from './components/sections/BrandStatement';
import Projects from './components/sections/Projects';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Resume />
        <BrandStatement />
        <Projects />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;