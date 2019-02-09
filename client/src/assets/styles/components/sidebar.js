import styled from 'styled-components'


//#d6ccc8
const SidebarCanvas = styled.div`
    background-color: #7b7182;    
    height: 92vh;
    width: 100%;
    padding: 1rem;
`
const SidebarContainer = styled.div`
    height: 46.5vh;
`
const SidebarHeader = styled.h3`
    font-family: zen-new, sans-serif;
    color: #9F97A4;
    display: inline;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 1.5rem;
    margin-bottom: .5rem;
    opacity: .8;
`
const SidebarText = styled.h4`
    font-family: fairplex-narrow, serif;
    font-size: 1.2rem;
    font-weight: 400;
    margin: 1rem 0 0 1rem;
    color: #CFCBD1;
`
const SmallMessageCard = styled.div`
    border: .3px solid #d6cbc7; 
    padding: .2rem;
    background: #e4ddda;
`


export { 
    SidebarCanvas, 
    SidebarContainer, 
    SidebarHeader, 
    SidebarText,
    SmallMessageCard, 
}
