import React from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import theme from '../themes/themes'
import LayoutPrime from './LayoutPrime'
import { globalStyle } from '../themes/styles'


export default () => 
    <MuiThemeProvider theme={theme}>

        <LayoutPrime style={globalStyle.html} />
    </MuiThemeProvider>
    