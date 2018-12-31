import styled from 'styled-components'
import Color from 'color'
import SimpleBar from 'simplebar-react'
const color = Color('#a59a96')


/*
    RELATED COLORS #bcaaa4
    #b89dac     #5e5552
    #5a6569     #222b2f
    #a4b6bc
    #7d846c
*/

/* 
    general styled components
*/
export const Carousel = styled.div`
    display: flex;
    overflow-y: hidden;
    overflow-x: hidden;
    margin-top: 3vh;
`
export const Content = styled.div` 
    padding: 1.3rem;
`
export const IconButtonContainer = styled.div`
    float: right;
    opacity: .5;
`
export const SectionHeader = styled.h2`
    font-size: 2.5rem;
    display: inline;
    color: #5e5552;
    opacity: .5;
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
    margin-top: .8rem;
    margin-bottom: 1.2rem;
    color: #7b6261;
`


/*
    ActionBar styled components
*/
export const ActionBarCanvas = styled.div` 
    height: 46.5vh;
    width: 100%;
    padding: 1rem;
    background-color: #ddd4d1;
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

export const frame = {
    library: {
        height: 'calc(50vh - (7vh / 2))',        
        width: '100%',
        padding: '1rem',
        //backgroundColor: '#e4e4e5',
        //backgroundColor: '#eae5e3'
        backgroundColor: '#e4ddda'
    },
    header: {
        color: color.darken(.2),
        opacity: .7,
    },
    infoText: {
        marginTop: 8,
        marginBottom: 12,
        color: color.darken(.14578),
    },
    smallText: {
        fontSize: 12,
        marginBottom: 3,
        color: '#7d846c',
        margin: 0,
    },
}

export const iconButtonStyles = {
    float: 'right',
    opacity: .3,
}

export const carousel = {
    container: {
        display: 'flex',
        //padding: '1rem 3.5rem',
        overflowY: 'hidden',
        overflowX: 'hidden',
        marginTop: '3vh',
    },
    carouselLabel: {
        margin: '.3rem 0'
    },
}

export const slideStyle = {
    card: {
        width: '30vw',
        display: 'inline-block',
        verticalAlign: 'top',
        whiteSpace: 'normal',
        marginLeft: '3.9rem',
        marginRight: '3.9rem',
        border: 'none',
        color: color.darken(.2),
    },
    image: {
        height: '20vh'
    },
}


export const bar = {
    height: '7vh', 
    justifyContent: 'center', 
    padding: '0 1vw',
}
