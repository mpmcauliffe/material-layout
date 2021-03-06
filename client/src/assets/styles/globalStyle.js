import { createGlobalStyle, } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    html {
        height: 100%;
        width: 100%;
        font-size: 62.5%
    }
    body {
        margin: 0;
        font-family: sans-serif;
        overflow-x: hidden;
    }
    a {
        color: #8D8F9C;
    }
    ul {
        list-style: none;
    }
    .simplebar-scrollbar:before {
        background-color: #f1eeec;
    }
`


export default GlobalStyle
