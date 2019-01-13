import styled from 'styled-components'
import { Image, Menu, Modal, } from 'semantic-ui-react'
import SimpleBar from 'simplebar-react'


const ActionBarCanvas = styled.div` 
    height: 46.5vh;
    width: 100%;
    padding: 1rem;
    background-color: #e4ddda;
`
const AppModal = styled(Modal)`
    max-width: 45rem;
`
const BookwormzLogo = styled(Image)`
    position: relative;
    z-index: 2;
    margin-bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
`
const Carousel = styled.div`
    display: flex;
    overflow-y: hidden;
    overflow-x: hidden;
    margin-top: 4vh;
`
const CenterContainer = styled.div`
    display: flex;
`
const Content = styled.div` 
    padding: 1.3rem;
`
const Header = styled(Menu)`
    &&& {
        height: 7vh;
        justify-content: center; 
        padding: 0 1vw;
        border: none;
        border-radius: 0;
        background: #ECD5CA;
    }
`
const HeaderLogo = styled.img.attrs({
    alt: 'Bookwormz',
})`
    min-height: 3rem; 
    min-width: 12rem;
    /* height: 2vh;
    width: 8vw;
    min-height: 1vh;
    min-width: 4vw; */
`
const IconButtonContainer = styled.div`
    float: right;
    opacity: .5;
`
const InfoText = styled.p`
    font-size: 1.3rem;
    margin: 0;
    color: #7d92a0;
`
const LibraryCanvas = styled.div`
    height: 46.5vh;        
    width: 100%;
    padding: 1rem;
    background-color: #e4ddda;
`
const Rate = styled.img`
    height: 1.5rem;
    margin-top: .5rem;
    opacity: .4;
`
const SectionHeader = styled.h2`
    font-size: 2.3rem;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    display: inline;
    color: #5e5552;
    opacity: .4;
`
const Sidescroll = styled(SimpleBar)` 
    height: 33vh !important; 
    width: 22vw !important;
    overflow-x: hidden !important; 
    margin-top: 1rem !important;
`
const SmallText = styled.p`
    font-size: 1.2rem;
    margin-bottom: .3rem;
    color: #7d846c;
    margin: 0;
`
const TopicText = styled.p`
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 1.5rem;
    margin-top: .3rem;
    margin-bottom: 1.2rem;
    color: #7b6261;
`


export { 
    ActionBarCanvas, 
    AppModal,
    BookwormzLogo,
    Carousel,
    CenterContainer,
    Content,
    Header,
    HeaderLogo,
    IconButtonContainer,
    InfoText,
    LibraryCanvas,
    Rate,
    SectionHeader,
    Sidescroll,
    SmallText,
    TopicText, 
}
