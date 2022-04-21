import React from 'react';
import styled from 'styled-components';
import RubiText from '../../assets/Rubi.png'; 


const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: black;
${'' /* background-color: ${props => props.theme.text}; */}
color: ${props => props.theme.body};
display: flex;
justify-content: center;
align-items: center;
position: relative;

`

const Container = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
`

const Box = styled.div`
width: 50%;
heigh: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const ImageContainer = styled.div`

width: 100%;
${'' /* width: 25vw;
height: 70 vh; */}

img{
    width: 100%;
    height: auto;
    ${'' /* height: 100%; */}
    border-radius: 10%; 
}

`


const About = () => {
    return (
        <Section>
            <Container>
                <Box>
                    Results-oriented Full Stack Software Developer with extensive background in healthcare which has provided me with valuable skills such as
                    attention to detail, organizational and communications skills. I am self motivated and a team player. I create efficient, dynamic, responsive and
                    visually pleasing applications. I am a hardworking employee and a fast learner with a desire to learn even more skills.
                </Box>
                <Box>
                    <ImageContainer>
                        <img src={RubiText} alt='Rubi, Software Developer' />
                    </ImageContainer>
                </Box>
            </Container>
        </Section>
    )
}

export default About