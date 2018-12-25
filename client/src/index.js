import React from 'react'
import ReactDOM from 'react-dom'
import App from './react-components/App'
import { CssBaseline } from '@material-ui/core'
import './assets/themes/base.css'


ReactDOM.render (
    <CssBaseline>
        <App />
    </CssBaseline>,
    document.getElementById('root')
);
