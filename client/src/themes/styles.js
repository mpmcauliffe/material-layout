//import jss from 'jss'
//import preset from 'jss-preset-default'


export const frame = {
    sidebar: {
        height: 'calc(100vh - 7vh)',
        width: '100%',
        padding: '2rem',
        backgroundColor: '#d6cbc7',
    },
    actionbar: { 
        height: 'calc(50vh - (7vh / 2))',
        width: '100%',
        padding: '2rem',
        backgroundColor: '#efdcd5',
    },
    library: {
        height: 'calc(50vh - (7vh / 2))',        
        width: '100%',
        padding: '2rem',
        backgroundColor: '#e4e4e5',
    },
}

export const carousel = {
    container: {
        //height: '25rem',
        display: 'flex',
        padding: '1rem 3.5rem',
        overflowY: 'hidden',
        overflowX: 'hidden',
    },
    carouselViewport: {
        whiteSpace: 'nowrap',
        overflowY: 'hidden',
        overflowX: 'hidden',
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
        height: '8rem',
        width: '2rem',
        border: '1px solid #000',
        '&:hover': {
            cursor: 'pointer',
        }
    },
}

export const slideStyle = {
    height: '13rem',
    width: '10rem',
    display: 'inline-block',
    verticalAlign: 'top',
    whiteSpace: 'normal',
    marginLeft: '2.7rem',
    marginRight: '2.7rem',
    border: 'none',
}
