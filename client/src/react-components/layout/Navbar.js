import React from 'react'
import { AppBar, IconButton, Toolbar, } from '@material-ui/core'
import { MenuIcon } from '@material-ui/icons/Menu'
import { bar } from '../../assets/themes/styles'


const Navbar = ({ classes, top }) =>
    <AppBar position="static" style={bar} color='secondary'>
        <img
            src={require(`../../assets/img/other/logo1.png`)}
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