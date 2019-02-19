import styled from 'styled-components'


const BookCover = styled.img`
    height: ${props => props.size};
`
const Card = styled.div`
    width: 15rem;
    min-width: 15rem;
    display: inline-block;
    vertical-align: top;
    white-space: normal;
    margin-left: 1rem;
    margin-right: 1rem;
    transition: color 1000;
    &:hover {
        cursor: pointer;
    }
    @media (max-width: 480px) {
        display: block;
        margin: 2rem auto;
    }
`
const EventCard = styled.div`
    display: inline-block;
    width: ${window.innerWidth / 1.09}
`


export { BookCover, Card, EventCard, }
