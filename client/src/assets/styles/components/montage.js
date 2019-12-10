import styled, {keyframes} from 'styled-components'
import { Image } from 'semantic-ui-react'


const imageAnimation = keyframes`
    0% { 
        opacity: 0; 
        animation-timing-function: ease-in;
    }
    10% {
        opacity: 1;
        animation-timing-function: ease-out;
    }
    20% {
        opacity: 1;
    }
    30% {
        opacity: 0;
    }
`
const Montage = styled.ul` 
    position: fixed;
    width: 100%;
    height: 100%;
    background-size: contain;
    top: 0;
    left: 0;
    z-index: 0;
    list-style: none;
    margin: 0;
    padding: 0;

    &li { 
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-position: center center;
        background-repeat: no-repeat;
        opacity: 0;
        z-index: 0;
        animation: ${imageAnimation} 24s linear infinite; 
    }

    li:nth-child(2) { 
        animation-delay: 6s; 
    }
    li:nth-child(3) { 
        animation-delay: 12s; 
    }
    li:nth-child(4) {
        animation-delay: 18s; 
    }
`
const MontageItem = styled.li`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    opacity: 0;
    z-index: 0;
    animation: ${imageAnimation} 24s linear infinite; 
`
const Graphic = styled(Image)`
    position: absolute;
    background-size: cover;
    background-position: center center;
    height: inherit;
    width: inherit;
    z-index: -1;
`


export { Graphic, Montage, MontageItem, }
