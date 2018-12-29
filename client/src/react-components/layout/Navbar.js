import React from 'react'
import { AppBar, IconButton, Toolbar } from '@material-ui/core'
import { MenuIcon } from '@material-ui/icons/Menu'


const Navbar = ({ top }) =>
    <AppBar position="static" style={{ height: '7vh', justifyContent: 'center', }} color={top ? 'secondary' : '#8c7b75'}>
    <img
        src={require(`../../assets/img/logo.png`)}
        alt='bookwormz'
        style={{ height: '4vh', width: '8vw', }}
    />
        
    </AppBar>


export { Navbar } 
    

/*
<IconButton color="inherit" aria-label="Menu">
    <MenuIcon />
</IconButton>
*/