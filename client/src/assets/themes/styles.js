import Color from 'color'
const color = Color('#a59a96')


export const frame = {
    sidebar: {
        height: 'calc(100vh - 7vh)',
        width: '100%',
        padding: '1rem',
        backgroundColor: '#d6cbc7',
    },
    actionbar: { 
        height: 'calc(50vh - (7vh / 2))',
        width: '100%',
        padding: '1rem',
        backgroundColor: '#efdcd5',
    },
    library: {
        height: 'calc(50vh - (7vh / 2))',        
        width: '100%',
        padding: '1rem',
        backgroundColor: '#e4e4e5',
    },
    header: {
        color: color.darken(.2),
        opacity: .7,
    },
    sidebarHeader: {
        display: 'inline',
        color: color.darken(.2),
        opacity: .6,
    },
    infoText: {
        marginTop: 8,
        marginBottom: 12,
        color: color.darken(.14578),
    },
    smallText: {
        fontSize: 12,
        marginBottom: 3,
        color: color.darken(.12347),
        margin: 0,
    },
}

export const iconButtonStyles = {
    float: 'right',
    opacity: .3,
}

export const carousel = {
    container: {
        display: 'flex',
        //padding: '1rem 3.5rem',
        overflowY: 'hidden',
        overflowX: 'hidden',
        marginTop: '4vh',
    },
    carouselLabel: {
        margin: '.3rem 0'
    },
}

export const slideStyle = {
    card: {
        width: '30vw',
        display: 'inline-block',
        verticalAlign: 'top',
        whiteSpace: 'normal',
        marginLeft: '3.9rem',
        marginRight: '3.9rem',
        border: 'none',
        color: color.darken(.2),
    },
    image: {
        height: '20vh'
    },
}

export const membersBar = {
    height: '30vh', 
    width: '22vw',
    overflowX: 'hidden', 
    marginTop: '1rem',
}
