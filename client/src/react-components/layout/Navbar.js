import React from 'react'
import { Header, HeaderLogo } from '../../assets/themes/styles'


const Navbar = ({ classes, top }) =>
    <Header position="static">
        <HeaderLogo
            src={require(`../../assets/img/other/logo1.png`)}
        />
        
    </Header>


export { Navbar } 
    

/*
<IconButton color="inherit" aria-label="Menu">
    <MenuIcon />
</IconButton>
*/