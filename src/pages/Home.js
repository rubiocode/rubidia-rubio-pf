import About from '../sections/About/About';
import BrandStatement from '../sections/BrandStatement/BrandStatement';
import Contact from '../sections/Contact/Contact';
import Hero from '../sections/Hero/Hero';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <Hero />
      <About />
      <BrandStatement />
      <Contact />
    </Container>
  )
}

export default Home