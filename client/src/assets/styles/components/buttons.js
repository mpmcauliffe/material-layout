import styled from 'styled-components'
import { Button } from 'semantic-ui-react'
import { FontSize, MainButtonTheme } from '../themes'


const MainButton = styled(Button)`
    &&& {
        height: 3rem;
        min-width: ${MainButtonTheme.width};
        background: ${MainButtonTheme.fill};
        color: ${MainButtonTheme.line};
        border: .15rem solid ${MainButtonTheme.line};
        font-size: ${FontSize.sSize};
        transform: translateX(42vw);
        padding: 0;
        border-radius: 0;
        text-align: center;
        transition: 500ms;
    }
    &&&:hover {
        cursor: pointer;
        background: ${MainButtonTheme.hoverFill};
        color: ${MainButtonTheme.hoverLine}
        border: .15rem solid ${MainButtonTheme.hoverLine};
    }
`


export { MainButton } 
