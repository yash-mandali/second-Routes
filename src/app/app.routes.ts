import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Notfound } from './pages/notfound/notfound';
import { User } from './pages/user/user';
import { UserDetails } from './pages/user-details/user-details';
import { Settings } from './pages/settings/settings';
import { UserList } from './pages/user-list/user-list';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "about",
        component: About
    },
    {
        path: "contact",
        component:Contact
    },

    // lazy loading - manually load
    // {
    //     path: "contact",
    //     loadComponent: () => import('./pages/contact/contact').then((c) => c.Contact)
    // },

    {
        path: "user",
        component: User,
        children: [
            { path: '', redirectTo: "user-list", pathMatch:'full' },
            {
                path: "user-list",
                component: UserList
            },
            {
                path: "settings",
                component: Settings
            }
        ]
    },
    {
        path: "user-details/:id",
        component: UserDetails
    },
    {
        path: "**",
        component: Notfound
    },

    // {
    //     path: "**",
    //     redirectTo:""
    // }
];
