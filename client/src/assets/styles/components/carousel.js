import styled from 'styled-components'
import { Button } from 'semantic-ui-react'


const CarouselContainer = styled.div`
    display: flex;
`
const CarouselViewport = styled.div`
    white-space: nowrap;
    overflow-y: hidden;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
`
const CarouselNav = styled(Button)`
    &&& {
        flex-basis: 4rem;
        flex-grow: 1;
        flex-shrink: 0;
        height: 27vh;
        max-width: 3vw;
        background-color: #F6F0F2;
        padding:0;
        border: .07rem solid #54899D;
        opacity: .5;
        outline: none;
        transition: opacity 1 ease-in-out;
    }
    &&&:hover {
        opacity: 1;
    }
    &&&:focus {
        border: .1rem solid #9D5B54;
    }
`

export {
    CarouselContainer,
    CarouselNav,
    CarouselViewport,
}
