import React from 'react'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import theme from './themes/themes'
import Navbar from './layout/Navbar'
import Sidebar from './layout/Sidebar'


export default () => 
    <MuiThemeProvider theme={theme}>
        <CssBaseline />    

        <Navbar />

        <Sidebar />
    </MuiThemeProvider>
    
