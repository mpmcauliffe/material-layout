export const members = [
    'Daffy Duck', 
    'Sepheroth', 
    'Hannibal', 
    'Sarlacc',
    'Jack Sparrow', 
    'Voldemort', 
    'Abraham Lincoln', 
    'Democratus', 
    'E.T.', 
    'Mary Poppins', 
    'Luke Skywalker',
]

export const events = [
    {
        id: 47878,
        book: 'Oliver Twist',
        location: 'Castle Grayskull',
        time: '01/23/2019 7:00pm'
    },
    {
        id: 37891,
        book: 'The Necronomicon',
        location: 'R\'lyeh',
        time: '02/9/2019 7:00pm'
    },
    {
        id: 14738,
        book: 'The Fountainhead',
        location: 'Chernobyl Reactor 4',
        time: '02/27/2019 5:30pm'
    },
    {
        id: 56778,
        book: 'Catch 22',
        location: 'Ziggurat of Ur',
        time: '03/15/2019 8:00pm'
    },
    {
        id: 67890,
        book: 'Tacuinum Sanitatis',
        location: 'Point Nemo',
        time: '04/23/2019 7:00pm'
    },
    {
        id: 36782,
        book: 'The Doors of Perception',
        location: 'Pyrenees Mountains',
        time: '05/13/2019 7:30pm'
    },
    {
        id: 26839,
        book: 'Big brown bear, blue bull, beautiful baboon blowing bubbles',
        location: 'Mt Damavand',
        time: '05/21/2019 5:30pm'
    },
]

export const books = [
    {
        number: 1,
        name: 'book 1',
        author: 'Jackie Gleason'
    },
    {
        number: 2,
        name: 'book 2',
        author: 'Molly Ringwald'
    },
    {
        number: 3,
        name: 'book 3',
        author: 'H.P. Lovecraft'
    },
    {
        number: 4,
        name: 'book 4',
        author: 'Sandra Dee'
    },
    {
        number: 5,
        name: 'book 5',
        author: 'Peggy Noonan'
    },
    {
        number: 6,
        name: 'book 6',
        author: 'Thomas Crapper'
    },
    {
        number: 7,
        name: 'book 7',
        author: 'Niels Bohr'
    },
    {
        number: 8,
        name: 'book 8',
        author: 'Sun Yat-sen'
    },
    {
        number: 9,
        name:  'number 9 number 9',
        author: 'The Beatles'
    },
]

export const thread = [
    {
        creator: 'Daffy Duck',
        date: '12/28/2018',
        subject: 'Change meeting location 03/15/2019',
        message: 'Location of meetup on 03/15/2019 will change from Alcatraz to Ziggurat of Ur',
        open: true,
        replies: [
            {
                creator: 'Sarlacc',
                date: '12/30/2018',
                message: 'Can I still swallow Han Solo and Boba Fett'
            },
            {
                creator: 'Hannibla',
                date: '12/30/2018',
                message: 'I\'ll be sure to bring fava beans and chianti'
            },

        ]
    },
    {
        creator: 'Marry Poppins',
        date: '12/27/2018',
        subject: 'supercalifragilisticexpialidocious',
        message: 'supercalifragilisticexpialidocious',
        open: true,
        replies: [
            {
                creator: 'Voldemort',
                date: '12/27/2018',
                message: 'Avada Kedavra!'
            },
            {
                creator: 'E.T.',
                date: '12/28/2018',
                message: 'E.T. KABOOM!'
            },
            {
                creator: 'Daffy Duck',
                date: '12/29/2018',
                message: 'Of course you realize this means WAR!'
            }
            
        ]
    },
    {
        creator: 'Democratus',
        date: '12/26/2018',
        subject: 'All things are made up of indivisible units called \'atoms\'',
        message: 'Atoms make up all things...they even make up the space between atoms',
        open: true,
        replies: [
            {
                creator: 'Luke Skywalker',
                date: '12/27/2018',
                message: 'I can cut an atom with my lightsaber'
            },
            {
                creator: 'Abraham Lincoln',
                date: '12/28/2018',
                message: 'These United States are much like this \'atom\' in that they are indivisible'
            },
        ]
    }
]
