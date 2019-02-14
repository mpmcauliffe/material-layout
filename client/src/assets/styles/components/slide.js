import styled from 'styled-components'


const BookCover = styled.img`
    height: 20vh;
`
const Card = styled.div`
    width: 15rem;
    min-width: 15rem;
    display: inline-block;
    vertical-align: top;
    whiteSpace: normal;
    margin-left: 2.1rem;
    margin-right: 2.1rem;
    transition: color 1000;
    &:hover {
        cursor: pointer;

    }
`


export { BookCover, Card, }
