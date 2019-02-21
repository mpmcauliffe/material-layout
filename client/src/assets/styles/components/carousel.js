import styled from 'styled-components'
import { Button } from 'semantic-ui-react'


const CarouselContainer = styled.div`
    display: flex;
    margin-top: 2rem;
    overflow-y: hidden;
    overflow-x: hidden;
    @media (max-width: 1024px) {
        width: 73vw;
    }
    @media (max-width: 769px) {
        width: 97vw;
    }
`
const CarouselViewport = styled.div`
    white-space: nowrap;
    padding-bottom: 1rem;
    overflow-y: hidden;
    overflow-x: auto;
    margin-top: 3rem;
    -webkit-overflow-scrolling: touch;
`
const CarouselNav = styled(Button)`
    &&& {
        flex-basis: 4rem;
        flex-grow: 1;
        flex-shrink: 0;
        height: 49vh;
        max-width: 3vw;
        background-color: #F6F0F2;
        padding:0;
        margin-top: 3rem;
        border: .07rem solid #54899D;
        opacity: .2;
        outline: none;
        transition: opacity 1 ease-in-out;
    }
    &&&:hover {
        opacity: 1;
    }
    &&&:focus {
        border: .1rem solid #9D5B54;
    }
    @media (max-width: 1024px) {
        &&&&&& {
            height: 33vh;
        }
    }
    @media (max-width: 769px) {
        &&&&&& {
            max-width: 5vw;
        }
    }
`

export {
    CarouselContainer,
    CarouselNav,
    CarouselViewport,
}
