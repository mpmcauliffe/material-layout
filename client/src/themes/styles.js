//import jss from 'jss'
//import preset from 'jss-preset-default'


export const globalStyle ={
    html: {
        boxSizing: 'border-box',
        fontSize: '62.5%',
    }
}

export const carousel = {
    container: {
        display: 'flex',
        padding: '1rem 3.5rem',
        overflowY: 'hidden',
    },
    carouselViewport: {
        whiteSpace: 'nowrap',
        overflowY: 'hidden',
        //overflowX: 'hidden',
        scrollbar: 'none',
        paddingBottom: '1rem',
    },
    carouselNav: {
        flexBasis: '4rem',
        flexGrow: 1,
        flexShrink: 0,
        backgroundColor: '#effffe',
        padding: 0,
        border: '.1rem solid #bbeeff',
        opacity: .5,
        outline: 'none',
        transition: 'opacity 1 ease-in-out',
        '&:hover': {
            opacity: 1,
        },
        '&:focus': {
            border: '.1 solid #99ccff',
        }
    },
    carouselLabel: {
        margin: '.3rem 0'
    },
    carouselButton: {
        height: '13rem',
        width: '2rem',
        border: '1px solid #000',
        '&:hover': {
            cursor: 'pointer',
        }
    },
}

export const slideStyle = {
    height: '15rem',
    width: '10rem',
    display: 'inline-block',
    verticalAlign: 'top',
    whiteSpace: 'normal',
    marginLeft: '2.5rem',
    marginRight: '2.5rem',
}
