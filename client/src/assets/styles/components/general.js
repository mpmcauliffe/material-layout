import styled from 'styled-components'
import { Button, Image, Menu, Modal, } from 'semantic-ui-react'
import SimpleBar from 'simplebar-react'
import { FormHeader } from '../themes/themes'


const ActionBarCanvas = styled.div` 
    height: 86vh;
    width: 100%;
    padding: 1rem;
    background-color: #FBF8F9;  
    @media (max-width: 480px) {
        height: 95vh;
        width: 100vw;
    }
`
const AppModal = styled(Modal)`
    &&&&&& {
        width: 30rem;
    }
`
const AppModalHeader = styled(Modal.Header)`    
    &&&&&& {
        background: ${FormHeader.fill};
    }
`
const BookwormzLogo = styled(Image)`
    height: 20rem;
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
    padding: 1rem;
    @media (max-width: 769px) {
        &&&&&& {
            width: 57vw;
        }
    }
    @media (max-width: 480px) {
        &&&&&& {
            width: 65vw;
        }
    }
`
const Cover = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background: rgba(0,0,0, 0.3);
`
const CreateButton = styled(Button)`
    &&&&&& {
        font-family: multi-display, sans-serif;
        font-weight: 400;
        color: #B7B1BA;
        background: none;
        border: .1rem solid #B7B1BA;
        transition: 500ms;
    }
    &&&&&&:hover {
        color: #2F6F88;
        background: #B7B1BA;
        border: .1rem solid #B7B1BA;
    }
    @media (max-width: 48rem) {
        &&&&&&&&&&{
            padding-top: 1.6rem;
            padding-bottom: 1.6rem;
            margin-left: 1rem;
        }
    }
`
const Header = styled(Menu)`
    &&& {
        height: 7vh;
        justify-content: center; 
        padding: 0 1vw;
        margin-top: 0;
        margin-bottom: 0;
        border: none;
        border-radius: 0;
        background: ${props => props.inputcolor || '#DFD8DB'};
    }
`
const HeaderLogo = styled.img.attrs({
    alt: 'Bookwormz',
})`
    min-height: 3rem; 
    min-width: 12rem;
    @media (max-width: 640px) {
        &&&&&& {
            min-height: 2rem;
            min-width: 8rem;
        }
    }
`
const IconButton = styled(Button)`
    &&&&&& {
        background: #B7B1BA;
        border-radius: 50%;
        opacity: .6;
        transition: 500ms;
    }
    &&&&&&:hover {
        transform: scale(1.1);
        opacity: 1;        
    }
` 
const IconButtonContainer = styled.div`
    float: right;
    opacity: .5;
`
const InfoText = styled.p`
    font-size: 1.2rem;
    margin: 0;
    color: #7d92a0;
`
const LibraryCanvas = styled.div`
    height: 86vh;        
    width: 100%;
    padding: .5rem 1rem;
    background-color: #ECF1F4;
    @media (max-width: 1024px) {
        padding: .5rem 2rem;
    } 
    @media (max-width: 480px) {
        height: 95vh;
        width: 100vw;
    }
`
const ProfilePicture = styled(Image)`
    &&& {
        height: 7rem;
        transition: 500ms;
    }
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
    @media (max-width: 980px) {
        &&&&&& {
            height: 11rem;
            margin-bottom: 3rem;
        }
    }
    @media (max-width: 360px) {
        &&&&&& {
            height: 6rem;
            margin-bottom: 1.5rem;
        }
    }
`
const Rate = styled(Image)`
    &&& {
        display: inline;
        height: 2rem;
        margin-top: .5rem;
        opacity: .4;
    }
`
const SectionHeader = styled.h2`
    font-size: 1.7rem;
    font-family: multi-display, sans-serif;
    font-weight: 500;
    display: inline;
    color: #434142;
    opacity: .4;
`
const Sidescroll = styled(SimpleBar)` 
    &&& {
        height: 27vh; 
        width: 22vw;
        overflow-x: hidden; 
        margin-top: .3rem;
    }
    @media (min-width: 1599px) {
        height: 30vh;
    }
    @media (max-width: 769px) {
        &&&&&& {
            width: 57vw;
            padding-left: 1.5rem;
        }
    }
    @media (max-width: 480px) {
        &&&&&& {
            width: 65vw;
            padding: 1rem;
        }
    }
`
const SmallText = styled.p`
    font-family: fairplex-narrow, serif;
    font-size: 1rem;
    margin-bottom: .3rem;
    color: #443E47;
    margin: 0;
`
const TopicText = styled.p`
    font-family: fairplex-narrow, serif;
    font-size: 1.4rem;
    margin-top: .1rem;
    margin-bottom: .1rem;
    color: #9F97A4;
`


export { 
    ActionBarCanvas, 
    AppModal,
    AppModalHeader,
    BookwormzLogo,
    Carousel,
    CenterContainer,
    Content,
    Cover,
    CreateButton,
    Header,
    HeaderLogo,
    IconButton,
    IconButtonContainer,
    InfoText,
    LibraryCanvas,
    ProfilePicture,
    Rate,
    SectionHeader,
    Sidescroll,
    SmallText,
    TopicText, 
}
