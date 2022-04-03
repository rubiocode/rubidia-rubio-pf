import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const Title = styled.h2`

font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.text};
align-self: flex-start;

span{
    text-transform: uppercase;
    font-family: 'Akaya Telivigala', cursive;
}

.text-1{
    color: blue;
}

.text-2{
    color: orange;
}

.text-3{
    color: red;
}
`



const TypeWriterText = () => {
    return (
        <Title>
            Hello! my name is Rubi
            <Typewriter 
            options={{

                autoStart: true,
                loop: true,
            }}
            onInit={(typewriter) => {
            typewriter.typeString('<span class="text-1">Full Stack Software Developer</span>')
        //     .callFunction(() => {
        //     console.log('String typed out!');
        // })
        .pauseFor(2000)
        .deleteAll()
        .typeString('<span class="text-2">Hello</span>')
        .pauseFor(2000)
        .deleteAll()
        .typeString('<span class="text-3">World</span>')
        .pauseFor(2000)
        .deleteAll()
        // .callFunction(() => {
        //     console.log('All strings were deleted');
        // })
        .start();
    }}
/>
        </Title>
        
    )
}

export default TypeWriterText