import React from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import theme from '../themes/themes'
import LayoutPrime from './LayoutPrime'


export default () => 
    <MuiThemeProvider theme={theme}>

        <LayoutPrime />
    </MuiThemeProvider>
    