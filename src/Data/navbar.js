import {v4 as uuidv4} from 'uuid'

export const navbar = [
    {
        id: uuidv4(),
        title: 'Home',
        url: '/'
    },
    {
        id: uuidv4(),
        title: 'Projects',
        url: '/projects'
    },
    {
        id: uuidv4(),
        title: 'Contact',
        url: '/contact-me'
    },
]