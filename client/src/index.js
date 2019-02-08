import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'normalize.css/normalize.css'
import GlobalStyle from './assets/styles/globalStyle'
import 'semantic-ui-css/semantic.min.css'
import './assets/fonts/typekit.css'


ReactDOM.render (
    <Fragment>
        <App />
        <GlobalStyle />
    </Fragment>, 
    document.getElementById('root')
)
