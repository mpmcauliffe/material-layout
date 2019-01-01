import styled from 'styled-components'
import Color from 'color'
import SimpleBar from 'simplebar-react'
const color = Color('#a59a96')


/*
    RELATED COLORS #bcaaa4
    #b89dac     #5e5552     #e4e4e5
    #5a6569     #222b2f     #ddd4d1
    #a4b6bc     #8da4b4
    #7d846c     #eae5e3
*/

/* 
    general styled components
*/
export const ActionBarCanvas = styled.div` 
    height: 46.5vh;
    width: 100%;
    padding: 1rem;
    background-color: #e4ddda;
`
export const Carousel = styled.div`
    display: flex;
    overflow-y: hidden;
    overflow-x: hidden;
    margin-top: 4vh;
`
export const Content = styled.div` 
    padding: 1.3rem;
`
export const IconButtonContainer = styled.div`
    float: right;
    opacity: .5;
`
export const InfoText = styled.p`
    font-size: 1.3rem;
    margin: 0;
    color: #7d92a0;
`
export const LibraryCanvas = styled.div`
    height: 46.5vh;        
    width: 100%;
    padding: 1rem;
    background-color: #e4ddda;
`
export const Rate = styled.img`
    height: 1.5rem;
    margin-top: .5rem;
    opacity: .6
`
export const SectionHeader = styled.h2`
    font-size: 2.3rem;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    display: inline;
    color: #5e5552;
    opacity: .4;
`
export const Sidescroll = styled(SimpleBar)` 
    height: 33vh !important; 
    width: 22vw !important;
    overflow-x: hidden !important; 
    margin-top: 1rem !important;
`
export const SmallText = styled.p`
    font-size: 1.2rem;
    margin-bottom: .3rem;
    color: #7d846c;
    margin: 0;
`
export const TopicText = styled.p`
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 1.5rem;
    margin-top: .3rem;
    margin-bottom: 1.2rem;
    color: #7b6261;
`


/*  
    Sidebar styled components
*/ 
export const SidebarCanvas = styled.div`
    background-color: #d6ccc8;    
    height: 93vh;
    width: 100%;
    padding: 1rem;
`
export const SidebarContainer = styled.div`
    height: 46.5vh;
`
export const SidebarHeader = styled.h3`
    color: #a59a96;
    display: inline;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 2rem;
    margin-bottom: .5rem;
    opacity: .8;
`
export const SmallMessageCard = styled.div`
    border: .3px solid #d6cbc7; 
    padding: .2rem;
    background: #e4ddda;
`


/*
    Slide component styles
*/
export const BookCover = styled.img`
    height: 20vh;
`
export const Card = styled.div`
    width: 15rem;
    min-width: 15rem;
    display: inline-block;
    vertical-align: top;
    whiteSpace: normal;
    margin-left: 3.9rem;
    margin-right: 3.9rem;
    border: .1rem solid #e4ddda;
    transition: color 1000;
    &:hover {
        cursor: pointer;

    }
`

export const bar = {
    height: '7vh', 
    justifyContent: 'center', 
    padding: '0 1vw',
}
