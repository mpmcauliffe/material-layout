
export const globalStyle ={
    html: {
        boxSizing: 'border-box',
        fontSize: '62.5%',
    }
}

export const carousel = {
    container: {
        display: 'flex'
    },
    carouselViewport: {
        whiteSpace: 'nowrap',
        overflowY: 'hidden',
        overflowX: 'auto',
        border: '.1rem solid #000,'
    },
    carouselNav: {
        flexBasis: '4rem',
        flexGrow: 1,
        flexShrink: 0,
        backgroundColor: '#effffe',
        padding:0,
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
}

export const slideStyle = {
    height: '13rem',
    width: '12rem',
    display: 'inline-block',
    verticalAlign: 'top',
    //padding: '3rem',
    whiteSpace: 'normal',
    marginLeft: '2rem',
    marginRight: '2rem',
}