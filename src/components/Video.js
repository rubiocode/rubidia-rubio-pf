import React from 'react';
import styled from 'styled-components';
// import GIF from '../assets/video.mp4';
import Rubi from '../assets/RubiText.png';


const VideoContainer = styled.div`

${'' /* width: 100%; */}
width: 25vw;
height: 70 vh;

img{
    width: 100%;
    ${'' /* height: auto; */}
    height: 100%;
    border-radius: 5%;
}

`



const Video = () => {
    return (
        <VideoContainer>
            {/* <video src={GIF} type='video/mp4' autoPlay muted loop /> */}
            <img src={Rubi} alt='Rubidia' />
            
        </VideoContainer>
    )
}

export default Video
