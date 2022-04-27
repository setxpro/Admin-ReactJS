import { Attach, Calendar, Company, Settings } from "../Styles/icons/styles";
import { format } from 'date-fns'

export const Notifications = [
    
    {   
        id: 1, 
        title: 'Event today', 
        message: 'Lorem ipsum dolor sit amet. Non labore assumenda aut voluptatem mollitia non voluptas facilis qui vitae nihil est laudantium quia est', 
        icon: <Calendar/>
    },
    {
        id: 2, 
        title: 'Settings', 
        message: 'Lorem ipsum dolor sit amet. Non labore assumenda aut voluptatem mollitia non voluptas facilis qui vitae nihil est laudantium quia est', 
        icon: <Settings/>
    },
    {
        id: 3, 
        title: 'Launch Admin', 
        message: 'Lorem ipsum dolor sit amet. Non labore assumenda aut voluptatem mollitia non voluptas facilis qui vitae nihil est laudantium quia est', 
        icon: <Attach/>
    },
    {
        id: 4, 
        title: 'Company', 
        message: 'Lorem ipsum dolor sit amet. Non labore assumenda aut voluptatem mollitia non voluptas facilis qui vitae nihil est laudantium quia est', 
        icon: <Company/>
    },
];

const today = new Date();
const formattedDate = format(today, 'dd/MM/yyyy');

export const MessageDB = [

    {
        id: 1,
        name: 'Miguel',
        avatar: 'https://cdn-icons-png.flaticon.com/512/146/146007.png',
        message: 'Lorem ipsum dolor sit amet. Non labore assumenda aut voluptatem mollitia non',
        date: formattedDate
    },
    {
        id: 2,
        name: 'Heitor',
        avatar: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
        message: 'Lorem ipsum dolor sit amet.',
        date: formattedDate
    },
    {
        id: 3,
        name: 'Fulano',
        avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png',
        message: 'Lorem ipsum dolor sit amet. Non labore assumenda aut voluptatem mollitia non voluptas facilis',
        date: formattedDate
    },
]