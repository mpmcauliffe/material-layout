import styled from 'styled-components'
import Color from 'color'
import SimpleBar from 'simplebar-react'
const color = Color('#a59a96') //#5a6569


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
export const SidebarMenu = styled.div` 
    padding: 1.3rem;
`

export const frame = {
    actionbar: { 
        height: 'calc(50vh - (7vh / 2))',
        width: '100%',
        padding: '1rem',
        //backgroundColor: '#efdcd5' #10232a
        backgroundColor: '#ddd4d1' //#222b2f
    },
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
    // sidebarHeader: {
    //     display: 'inline',
    //     color: color.darken(.2),
    //     opacity: .6,
    // },
    infoText: {
        marginTop: 8,
        marginBottom: 12,
        color: color.darken(.14578),
    },
    smallText: {
        fontSize: 12,
        marginBottom: 3,
        color: color.darken(.12347),
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

export const membersBar = {
    height: '30vh', 
    width: '22vw',
    overflowX: 'hidden', 
    marginTop: '1rem',
}

// export const Sidescroll = styled.SimpleBar`
//     height: 30vh; 
//     width: 22vw;
//     overflow-x: hidden; 
//     margin-top: 1rem;
// `

export const bar = {
    height: '7vh', 
    justifyContent: 'center', 
    padding: '0 1vw',
}
