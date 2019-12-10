import styled from 'styled-components'
import { Image } from 'semantic-ui-react'


const BookCover = styled.img`
    height: ${props => props.size};
    overflow-y: hidden;
    overflow-x: hidden;
`
const Card = styled.div`
    width: 19rem;
    min-width: 15rem;
    display: inline-block;
    vertical-align: top;
    white-space: normal;
    margin-left: 1rem;
    margin-right: 1rem;
    overflow-y: hidden;
    overflow-x: hidden;
    transition: color 1000;
    &:hover {
        cursor: pointer;
    }
    @media (max-width: 480px) {
        display: block;
        width: 80vw;
        margin: 2rem auto;
    }
`
const EventCard = styled.div`
    display: inline-block;
    min-width: 66vw;
    margin-right: 2.5vw;
    @media (max-width: 769px) {
        min-width: 85vw;
    }
`
const EventHeader = styled.h2`
    font-family: multi-display, sans-serif;
    font-size: 1.5rem;
    color: #C3BEC6;
    font-weight: 400;
    overflow-wrap: break-word;
`
const EventInfo = styled.h3`
    font-family: multi-display, sans-serif;
    font-size: 1.3rem;
    font-weight: 300;
    color: #1E4757;
`
const EventText = styled.p`
    font-family: fairplex-narrow, serif;
    font-size: 1.2rem;
    font-weight: 400;
    color: #C8A4A0;
    margin-bottom: .2rem;
    margin-top: 0;
`
const ColTwo = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
`
const MapCanvas = styled(Image)`
    height: 290px;
    width: 250px;
    border: 1px solid #E8CCBF;
    @media (max-width: 769px) {
        margin: 5rem 2rem 3rem 9.5rem;
    }
`
const MobileCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
    border-bottom: .1rem solid #CFCBD1;
`


export { 
    BookCover, 
    Card, 
    ColTwo,
    EventCard, 
    EventHeader,
    EventInfo,
    EventText,
    MapCanvas,
    MobileCard,
}
