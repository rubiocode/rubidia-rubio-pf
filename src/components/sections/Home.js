import React from 'react';
import styled from 'styled-components';
import TypeWriterText from '../TypeWriterText';
import Video from '../Video';
//import RoundTextBlack from '../assets/pngImage'; 

const Section = styled.section`
${'' /*  we need to account for the navbar height within the window */}
min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
width: 100vw;
position: relative;
background-color: ${props => props.theme.body};

`
const Container = styled.div`
width: 75%;
min-height: 80vh;
margin: 0 auto;
${'' /* background-color: lightblue; */}

display: flex;
justify-content: center;
align-items: center;

`

const Box = styled.div`

width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const Round = styled.div`

position: absolute;
bottom: 2rem;
right: 90%;
width: 6rem;
height: 6rem;


img{
    width: 100%;
    heigh: auto;

}
`
const Circle = styled.span`

width: 3rem;
height: 3rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;

background-color: black;
color: ${props => props.theme.body}
`



const Home = () => {
    return (
        <Section>
            <Container>
                <Box>
                    <TypeWriterText />
                </Box>
                <Box>
                    <Video />
                </Box>
                <Round>
                <Circle>
                    &#x2193;
                </Circle>
                    {/* <img src={RoundTextBlack} alt='Keep Scrolling Down' />*/}
                </Round>
            </Container>
        </Section>
    )
}

export default Home