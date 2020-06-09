import {RouteInfo} from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '/overview',
        title: 'Dashboard',
        icon: 'icon-grid',
        class: '',
        ddclass: '',
        extralink: false,
        submenu: []
    },
    {
        path: '',
        title: 'Report',
        icon: 'icon-drawar',
        class: 'has-arrow',
        ddclass: '',
        extralink: false,
        submenu: [
            {
                path: '/report',
                title: 'Report Sale',
                icon: 'icon-puzzle',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            }
        ]
    }
];
