/*
    This file is a mock API and Database for the purpose of frontend functionality
*/


export const members = [
    'Daffy Duck', 
    'Sepheroth', 
    'Hannibal', 
    'Sarlacc',
    'Jack Sparrow', 
    'Bearistotle',
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
        title: 'Oliver Twist',
        location: 'Castle Grayskull',
        time: '01/23/2019 7:00pm'
    },
    {
        id: 37891,
        title: 'The Necronomicon',
        location: 'R\'lyeh',
        time: '02/9/2019 7:00pm'
    },
    {
        id: 14738,
        title: 'The Fountainhead',
        location: 'Chernobyl Reactor 4',
        time: '02/27/2019 5:30pm'
    },
    {
        id: 56778,
        title: 'Catch 22',
        location: 'Ziggurat of Ur',
        time: '03/15/2019 8:00pm'
    },
    {
        id: 67890,
        title: 'Tacuinum Sanitatis',
        location: 'Point Nemo',
        time: '04/23/2019 7:00pm'
    },
    {
        id: 36782,
        title: 'The Doors of Perception',
        location: 'Pyrenees Mountains',
        time: '05/13/2019 7:30pm'
    },
    {
        id: 26839,
        title: 'Big brown bear, blue bull, beautiful baboon blowing bubbles',
        location: 'Mt Damavand',
        time: '05/21/2019 5:30pm'
    },
]

export const bookList = [
    {
        id: 47878,
        title: 'Oliver Twist',
        author: 'Charles Dickens',
        rating: 3.86,
        number: 1,
    },
    {
        id: 37891,
        title: 'The Necronomicon',
        author: 'H.P. Lovecraft',
        rating: 4.30,
        number: 2,
    },
    {
        id: 14738,
        title: 'The Fountainhead',
        author: 'Ayn Rand',
        rating: 3.86,
        number: 3,
    },
    {
        id: 56778,
        title: 'Catch 22',
        author: 'Joseph Heller',
        rating: 3.98,
        number: 4,
    },
    {
        id: 67890,
        title: 'Tacuinum Sanitatis',
        author: 'Ibn Butlan',
        rating: 4.50,
        number: 5,
    },
    {
        id: 36782,
        title: 'The Doors of Perception',
        author: 'Aldous Huxley',
        rating: 3.98,
        number: 6,
    },
    {
        id: 26839,
        title: 'Big Brown Bear, Blue Bull, Beautiful Baboon Blowing Bubbles',
        author: 'Stan & Jan Berenstain',
        rating: 'not rated',
        number: 7,
    },
    {
        id: 48732,
        title:'Siege of Darkness',
        author: 'R.A. Salvator',
        rating: 4.16,
        number: 8,
    },
    {
        id: 73627,
        title: 'The Devil in Massachusetts',
        author: 'Marion L. Starkey',
        rating: 3.58,
        number: 9,
    },
    {
        id: 14263,
        title: 'The Power of Woman : The Life and Writings of Sarah Moore Grimke',
        author: 'Pamela R. Durso',
        rating: 4.75,
        number: 10,
    },
    {
        id: 98473,
        title: 'One Fish - Two Fish - Red Fish - Blue Fish',
        author: 'Dr. Seuss',
        rating: 4.12,
        number: 11,
    },
    {
        id: 46372,
        title: 'Caravans',
        author: 'James A Michener',
        rating: 4.04,
        number: 12,
    },
    {
        id: 84732,
        title: 'Lessons of History',
        author: 'Will and Ariel Durant',
        rating: 4.16,
        number: 13,
    },
    {
        id: 78623,
        title: 'Lincoln and his Generals',
        author: 'T. Harry Williams',
        rating: 4.18,
        number: 14,
    },
    {
        id: 36477,
        title: 'Psychological Operations : Principles and Case Studies',
        author: 'Frank L. Goldstein',
        rating: 3.02,
        number: 15,
    }
]

export const books = [
    {
        number: 1,
        title: 'book 1',
        author: 'Jackie Gleason'
    },
    {
        number: 2,
        title: 'book 2',
        author: 'Molly Ringwald'
    },
    {
        number: 3,
        title: 'book 3',
        author: 'H.P. Lovecraft'
    },
    {
        number: 4,
        title: 'book 4',
        author: 'Sandra Dee'
    },
    {
        number: 5,
        title: 'book 5',
        author: 'Peggy Noonan'
    },
    {
        number: 6,
        title: 'book 6',
        author: 'Thomas Crapper'
    },
    {
        number: 7,
        title: 'book 7',
        author: 'Niels Bohr'
    },
    {
        number: 8,
        title: 'book 8',
        author: 'Sun Yat-sen'
    },
    {
        number: 9,
        title:  'number 9 number 9',
        author: 'The Beatles'
    },
]

export const thread = [
    {
        id: 'ag8mes73e',
        creator: 'Daffy Duck',
        date: '12/28/2018',
        subject: 'Change meeting location 03/15/2019',
        message: 'Location of meetup on 03/15/2019 will change from Alcatraz to Ziggurat of Ur',
        open: true,
        replies: [
            {
                creator: 'Sarlacc',
                date: '12/30/2018',
                message: 'Can I still swallow Han Solo and Boba Fett?'
            },
            {
                creator: 'Hannibla',
                date: '12/30/2018',
                message: 'I\'ll be sure to bring fava beans and chianti'
            },

        ]
    },
    {
        id: '8xuksu82w',
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
        id: 'a23xi8s77',
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
    },
    {
        id: 'df788hscv',
        creator: 'Bearistotle',
        date: '12/25/2018',
        subject: 'I am a man',
        message: 'Man is by nature a political animal. I, a political animal, am therefore a man.',
        open: true,
        replies: [
            {
                creator: 'Democratus',
                date: '12/25/2018',
                message: 'I feel like that\'s not a valid syllogism'
            },
            {
                creator: 'Bearistotle',
                date: '12/25/2018',
                message: 'ROAAAAAAAAAAAAWWRRRR!'
            },
        ]
    },
    {
        id: 'zud789oki',
        creator: 'Sepheroth',
        date: '12/24/2018',
        subject: 'My sword',
        message: 'I\'m a wanna be goth dork with a giant sword. I like to brood and kill people. Oh I also like power',
        open: true,
        replies: [
            {
                creator: 'Voldemort',
                date: '12/25/2018',
                message: 'Your an idiot'
            },
            {
                creator: 'Sepheroth',
                date: '12/15/2018',
                message: '*you\'re'
            },
            {
                creator: 'Abraham Lincoln',
                date: '12/25/2018',
                message: 'I once temped George Washington to cut down his father\'s cherry tree with a giant sword.'
            },
        ]
    },
]
