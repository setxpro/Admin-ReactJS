import { formatDistance, formatRelative, subDays } from 'date-fns'
import { ptBR } from 'date-fns/locale';
import IsChecked from '../../Components/DashboardComponents/TableOrderStatus/isChecked';
import { DocumentIcon, UploadIcon, ClockIcon, OpenMailIcon, Designin, ChartIconGi, SuitchaseIcon, Screen } from '../../Styles/icons/styles';



export const FeaturesPercentage = [
    {value: 23, percentual: 18, title: 'Potential Growth'},
    {value: 17, percentual: 11, title: 'Revenue current'},
    {value: 12.34, percentual: -2.4, title: 'Daily Income'},
    {value: 31.53, percentual: 3.5, title: 'Expense current'},
]


const date = new Date();
const datefns = formatRelative(subDays(date, 5), date, {locale: ptBR})

export const TransactionHistoryDb = [
    {title: 'Transfer to Paypal', value: 400, date: datefns},
    {title: 'Transfer to Strip', value: 400, date: datefns},
    {title: 'Transfer to PicPay', value: 400, date: datefns},
]


const projectDate = formatDistance(subDays( date, 3), date, { addSuffix: true }, {locale: ptBR})

export const OpenProjectsDB = [ 
    {title: 'Admin dashboard design', icon: <DocumentIcon/> , subTitle: 'Broadcast web app mockup', totailTasks: 30, totailInssues: 5, time: projectDate},
    {title: 'Wordpress Development', icon: <UploadIcon/>, subTitle: 'Upload new design', totailTasks: 23, totailInssues: 5, time: projectDate},
    {title: 'Project meeting', icon: <ClockIcon/>, subTitle: 'New project discussion', totailTasks: 16, totailInssues: 2, time: projectDate},
    {title: 'Broadcast Mail', icon: <OpenMailIcon/>, subTitle: 'Sent release details to team', totailTasks: 35, totailInssues: 7, time: projectDate},
    {title: 'UI Design', icon: <Designin/>, subTitle: 'New application planning', totailTasks: 27, totailInssues: 4, time: projectDate},
]


export const RevenueSalesPurchaseDB = [
    {title: 'Revenue', value: 32123, percent: 3.5, icon: <ChartIconGi/>, resum: '11.38% Since last month'},
    {title: 'Sales', value: 45850, percent: 8.3, icon: <SuitchaseIcon/>, resum: '9.61% Since last month'},
    {title: 'Purchase', value: 2039, percent: -2.1, icon: <Screen/>, resum: '2.27% Since last month'},
]

export const OrderStatusDB = [
    {
        checked: <IsChecked/>, 
        name: 'Scott Samers', 
        avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png', 
        orderNo: 2312, 
        productCost: 14.50, 
        project: 'Dashboard',
        paymentMode: 'Credit card', 
        startDate: datefns, 
        paymentStatus: 'Approved'
    },
    {
        checked: <IsChecked/>, 
        name: 'Henry Klein', 
        avatar: 'https://www.pikpng.com/pngl/b/279-2797047_user-avatar-icon-portable-network-graphics-clipart.png', 
        orderNo: 2312, 
        productCost: 14.50, 
        project: 'Website', 
        paymentMode: 'Cash on delivered', 
        startDate: datefns, 
        paymentStatus: 'Pending'
    },
    {
        checked: <IsChecked/>, 
        name: 'Estella Bryan', 
        avatar: 'https://www.pikpng.com/pngl/b/279-2797047_user-avatar-icon-portable-network-graphics-clipart.png', 
        orderNo: 2312, 
        productCost: 14.50, 
        project: 'App design', 
        paymentMode: 'Online Payment', 
        startDate: datefns, 
        paymentStatus: 'Pending'
    },
    {
        checked: <IsChecked/>, 
        name: 'Lucy Abbott', 
        avatar: 'https://www.pikpng.com/pngl/b/279-2797047_user-avatar-icon-portable-network-graphics-clipart.png', 
        orderNo: 2312, 
        productCost: 14.50, 
        project: 'Development', 
        paymentMode: 'PIX', 
        startDate: datefns, 
        paymentStatus: 'Approved'
    },
    {
        checked: <IsChecked/>, 
        name: 'Fulano De Sá', 
        avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png', 
        orderNo: 2312, 
        productCost: 14.50, 
        project: 'Website', 
        paymentMode: 'Online Payment', 
        startDate: datefns, 
        paymentStatus: 'Rejected'
    },
    {
        checked: <IsChecked/>, 
        name: 'Peter Gill', 
        avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png', 
        orderNo: 2312, 
        productCost: 14.50, 
        project: 'Dashboard', 
        paymentMode: 'Credit card', 
        startDate: datefns, 
        paymentStatus: 'Rejected'
    },

]

export const MessageItemDB = [
    {avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png', name: 'Leonard', message: 'Well, it seems to be working now.', time: projectDate},
    {avatar: 'https://www.pikpng.com/pngl/b/279-2797047_user-avatar-icon-portable-network-graphics-clipart.png', name: 'Luella Mills', message: 'Well, it seems to be working now.Please review the tickets', time: projectDate},
    {avatar: 'https://www.pikpng.com/pngl/b/279-2797047_user-avatar-icon-portable-network-graphics-clipart.png', name: 'Ethel Kelly', message: 'Please review the tickets', time: projectDate},
    {avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png', name: 'Herman May', message: 'Thanks a lot. It was easy to fix Thanks a lot. It was easy to fix it .', time: projectDate},
    {avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png', name: 'Leonard', message: 'Well, it seems to be working now.', time: projectDate},
    {avatar: 'https://www.pikpng.com/pngl/b/279-2797047_user-avatar-icon-portable-network-graphics-clipart.png', name: 'Luella Mills', message: 'Well, it seems to be working now.Please review the tickets', time: projectDate},
    {avatar: 'https://www.pikpng.com/pngl/b/279-2797047_user-avatar-icon-portable-network-graphics-clipart.png', name: 'Ethel Kelly', message: 'Please review the tickets', time: projectDate},
    {avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png', name: 'Herman May', message: 'Thanks a lot. It was easy to fix Thanks a lot. It was easy to fix it .', time: projectDate},
]


export const SlideShow = [
    {id: 1, img: 'https://epipoca.com.br/wp-content/uploads/2021/02/rick-and-morty--1200x900.jpg'},
    {id: 2, img: 'http://imagem.band.com.br/f_477058.jpg'},
    {id: 3, img: 'https://cl.buscafs.com/www.levelup.com/public/uploads/images/709219/709219_600x315.jpg'},
    {id: 4, img: 'https://pad.mymovies.it/filmclub/2018/07/122/covermd_home.jpg'},
]

export const AuthorExample = [
    {name: 'Patrick', avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png', message: 'Well, it seems to be working now.', obs: 'In the momment, this is my progress.', progress: 60, time: projectDate}
]