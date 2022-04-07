import React from 'react';
import styled, {keyframes} from 'styled-components';
import TypeWriterText from '../TypeWriterText';
import Video from '../Video';
import RoundTextBlack from '../../assets/RoundTextBlack2.png'; 

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
const rotate = keyframes`
100%{
    transform: rotate(1turn)
}

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
    animation: ${rotate} 10s linear infinite;

}
`


const Circle = styled.span`

width: 3rem;
height: 3rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
z-index: 1;

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);


background-color: black;
color: white;
font-size: ${props => props.theme.fontxl};


`



const Home = () => {
    return (
        <Section>
            <Container>
                <Box>
                    <Video />
                </Box>
                <Box>
                    <TypeWriterText />
                </Box>
                <Round>
                <Circle>
                    &#x2193;
                </Circle>
                    <img src={RoundTextBlack} alt='Keep Scrolling Down' />
                </Round>
            </Container>
        </Section>
    )
}

export default Home