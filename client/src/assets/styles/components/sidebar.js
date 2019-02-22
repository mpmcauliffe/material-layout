import styled from 'styled-components'
import { Button } from 'semantic-ui-react'

const Drawer = styled.div`
    width: 67vw;
    position: absolute;
    z-index: 200;
    transform: ${props => props.show || 'translateX(-100%)' };
    box-shadow: 1px 0px 7px rgba(0,0,0, 0.5);
    transition: transform 500ms ease-out;
    @media (max-width: 480px) {
        width: 77vw;
    }
`
const SidebarBulk = styled.div`
    display: flex;
    height: 80vh;
    width: 20vw;
    position: fixed;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 769px) {
        &&& {
            height: 90vh;
            width: 63vw;
        }
    }
    @media (max-width: 480px) {
        &&& {
            height: 86vh;
            width: 69vw;
        }
    }
`
const SidebarButton = styled(Button)`
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
    @media (max-width: 980px) {
        &&&&&&&&& {
            height: 3rem;
        }
    }
`
const SidebarCanvas = styled.div` 
    height: 196vh;
    width: 100%;
    display: flex;
    /* position: fixed; */
    flex-direction: column;
    justify-content: space-between;
    background: ${props => props.inputcolor || '#275B70'};    
    padding: 1rem; 
    @media (max-width: 480px) {
        &&& {
            height: 93vh;
            width: 81vw;
        }
    }
    @media (min-width: 768px) {
        &&& {
            height: 93vh;
        }
    }
    @media (min-width: 1023px) {
        &&& {
            height: 196vh;
        }
    }
`
const SidebarContainer = styled.div`
    height: 46.5vh;
`
const SidebarHeader = styled.h3`
    font-family: multi-display, sans-serif;
    font-weight: 500;
    color: #B7B1BA;
    display: inline-block;
    font-size: 1.5rem;
    margin-bottom: .5rem;
    opacity: .8;
    @media (max-width: 980px) {
        font-size: 2.1rem;
    }
    @media (max-width: 460px) {
        font-size: 1.7rem;
    }
`
const SidebarLink = styled.h4`
    font-family: fairplex-narrow, serif;
    font-size: 1.2rem;
    font-weight: 400;
    text-decoration: underline
    color: #CFCBD1;
    transition: 500ms;
    &&&&&&:hover {
        color: #D49A83;        
    }
    @media (max-width: 980px) {
        font-size: 1.4rem;
    }
`
const SidebarText = styled.h4`
    font-family: fairplex-narrow, serif;
    font-size: 1.2rem;
    font-weight: 400;
    margin: 1rem 0 0 1rem;
    color: #CFCBD1;
    @media (max-width: 980px) {
        padding-left: 3rem;
        font-size: 1.4rem;
    }
`
const SmallMessageCard = styled.div`
    border: .3px solid #D3B6B3; 
    padding: .2rem;
    background: #E9DAD9;
    opacity: .7;
    transition: 500ms;
    &:hover {
        cursor: pointer;
        opacity: 1;
    }
`
const SubjectText = styled.p`
    font-family: fairplex-narrow, serif;
    font-size: 1.2rem;
    margin-top: .3rem;
    margin-bottom: .8rem;
    color: #3E1916;
`
const Submenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 980px) {
        padding: 0 3rem;
        margin-bottom: 3rem;
    }
    @media (max-width: 480px) {
        padding: 0 1rem;
        margin-bottom: 2vh;
    }
`


export { 
    Drawer,
    SidebarBulk,
    SidebarButton,
    SidebarCanvas, 
    SidebarContainer, 
    SidebarHeader, 
    SidebarLink,
    SidebarText,
    SmallMessageCard, 
    SubjectText,
    Submenu,
}
