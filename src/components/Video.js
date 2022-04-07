import React from 'react';
import styled from 'styled-components';
// import GIF from '../assets/video.mp4';
import Rubi from '../assets/Rubi.png';


const VideoContainer = styled.div`

width: 100%;

img{
    width: 100%;
    height: auto;
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
