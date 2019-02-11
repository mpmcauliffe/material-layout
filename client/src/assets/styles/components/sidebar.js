import styled from 'styled-components'
import { Button } from 'semantic-ui-react'


const SidebarButton = styled(Button)`
    &&&&&& {
        background: #B7B1BA;
        border-radius: 50%;
        opacity: .6;
        transition: 500ms;
    }
    &&&&&&:hover {
        opacity: 1;        
    }
`
const SidebarCanvas = styled.div` 
    height: 92vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${props => props.inputcolor || '#275B70'};    
    padding: 1rem;
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
`
const SidebarText = styled.h4`
    font-family: fairplex-narrow, serif;
    font-size: 1.2rem;
    font-weight: 400;
    margin: 1rem 0 0 1rem;
    color: #CFCBD1;
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
`


export { 
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
