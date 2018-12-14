import React from 'react'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import theme from './themes/themes'
import LayoutPrime from './LayoutPrime'


export default () => 
    <MuiThemeProvider theme={theme}>
        <CssBaseline />    

        <LayoutPrime />
    </MuiThemeProvider>
    
