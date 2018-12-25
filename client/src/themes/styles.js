import Color from 'color'
const color = Color('#a59a96')

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
    header: {
        color: color.darken(.4),
    },
    infoText: {
        color: color.darken(.3),
    },
    smallText: {
        color: color.darken(.2),
        margin: 0,
    },
    actionText: {

    },
}

export const carousel = {
    container: {
        display: 'flex',
        padding: '1rem 3.5rem',
        overflowY: 'hidden',
        overflowX: 'hidden',
    },
    carouselViewport: {
        height: '25vh',
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
    marginLeft: '3.9rem',
    marginRight: '3.9rem',
    border: 'none',
    color: color.darken(.2),
}


/* from https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors */
// const shadeColor2 = (color, percent) => {   
//     let f = parseInt(color.slice(1), 16), 
//         t = percent < 0 ? 0 : 255,
//         p = percent < 0 ? percent * -1 : percent,
//         R = f>>16,
//         G = f>>8&0x00FF,
//         B = f&0x0000FF;

//     return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
// }
