// import { Routes } from '@angular/router';
// import { Home } from './pages/home/home';
// import { About } from './pages/about/about';
// import { Contact } from './pages/contact/contact';
// import { Notfound } from './pages/notfound/notfound';
// import { User } from './pages/user/user';
// import { UserDetails } from './pages/user-details/user-details';
// import { Settings } from './pages/settings/settings';
// import { UserList } from './pages/user-list/user-list';
// import { Dashboard } from './pages/dashboard/dashboard';
// import { Dashbordpage } from './DashboardComponents/dashbordpage/dashbordpage';
// import { Products } from './DashboardComponents/products/products';
// import { Customerpage } from './DashboardComponents/customerpage/customerpage';
// import { ProductDetails } from './DashboardComponents/product-details/product-details';
// import { canDeactivateGuard } from './Auth/can-deactivate-guard';
// import { ProductList } from './DashboardComponents/product-list/product-list';
// import { AddProducts } from './pages/add-products/add-products';
// import { Signup } from './pages/signup/signup';
// import { Login } from './pages/login/login';
// import { guestGuard } from './Auth/guards/guest-guard';
// import { authGuard } from './Auth/guards/auth-guard';
// import { roleGuard } from './Auth/guards/role-guard';


// export const homeRoutes: Routes = [
//     {
//         path: "",
//         component: Home,
//         canActivate: [authGuard],
//     },
//     // { path: '', redirectTo: "login", pathMatch: 'full' },
//     {
//         path: "productspage",
//         canActivate: [authGuard],
//         component: Products
//     },
//     {
//         path: "about",
//         canActivate: [authGuard],
//         component: About
//     },
//     {
//         path: "contact",
//         component: Contact,
//         canActivate: [authGuard],
//         // canDeactivate:[canDeactivateGuard]
//     },
//     {
//         path: "signup",
//         component: Signup
//     },
//     {
//         path: "login",
//         component: Login,
//         canActivate: [guestGuard]
//     },

//     // lazy loading - manually load
//     // {
//     //     path: "contact",
//     //     loadComponent: () => import('./pages/contact/contact').then((c) => c.Contact)
//     // },

//     {
//         path: "user",
//         component: User,
//         canActivate: [authGuard],
//         children: [
//             { path: '', redirectTo: "user-list", pathMatch: 'full' },
//             {
//                 path: "user-list",
//                 component: UserList
//             },
//             {
//                 path: "settings",
//                 component: Settings
//             }
//         ]
//     },
//     {
//         path: "user-details/:id",

//         component: UserDetails
//     },

//     {
//         path: "product-details/:id",
//         component: ProductDetails
//     },


// ];

// export const adminRoute: Routes = [
//     {
//         path: "dashboard",
//         component: Dashboard,
//         canActivate: [authGuard, roleGuard],
//         data: { roles: ['Admin'] },

//         children: [
//             { path: '', redirectTo: "dashbordpage", pathMatch: 'full' },
//             {
//                 path: "dashbordpage",
//                 // component: Dashbordpage,
//                 loadComponent: () => import('./DashboardComponents/dashbordpage/dashbordpage').then((c) => c.Dashbordpage)
//             },
//             {
//                 path: "product-list",
//                 loadComponent: () => import('./DashboardComponents/product-list/product-list').then((c) => c.ProductList)
//             },
//             {
//                 path: "customerpage",
//                 loadComponent: () => import('./DashboardComponents/customerpage/customerpage').then((c) => c.Customerpage)
//             },
//             {
//                 path: "user-list",
//                 loadComponent: () => import('./pages/user-list/user-list').then((c) => c.UserList)
//             },
//             {
//                 path: "settings",
//                 component: Settings
//             },
//             {
//                 path: "not-found",
//                 component: Notfound
//             },
//             {
//                 path: "add-products",
//                 loadComponent: () => import('./pages/add-products/add-products').then((c) => c.AddProducts)
//             },
//             {
//                 path: "product-details/:id",
//                 loadComponent: () => import('./DashboardComponents/product-details/product-details').then((c) => c.ProductDetails)
//             },
//         ]
//     },
// ]

// export const routes: Routes = [
//     ...homeRoutes,
//     ...adminRoute,
//     {
//         path: "**",
//         component: Notfound
//     },
// ];


// ----------------------------old ^ --------------------------------------

import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Notfound } from './pages/notfound/notfound';
import { User } from './pages/user/user';
import { UserDetails } from './pages/user-details/user-details';
import { Settings } from './pages/settings/settings';
import { UserList } from './pages/user-list/user-list';
import { Dashboard } from './pages/dashboard/dashboard';
import { Signup } from './pages/signup/signup';
import { Login } from './pages/login/login';
import { guestGuard } from './Auth/guards/guest-guard';
import { roleGuard } from './Auth/guards/role-guard';
import { Products } from './DashboardComponents/products/products';
import { ForgotPassword } from './pages/forgot-password/forgot-password';
import { Chatbot } from './pages/chatbot/chatbot';

export const routes: Routes = [

    /* ---------- PUBLIC ---------- */
    {
        path: 'login',
        component: Login,
        canActivate: [guestGuard]
    },
    {
        path: 'signup',
        component: Signup,
        canActivate: [guestGuard]
    },
    { path: 'forgot-password', component: ForgotPassword },

    /* ---------- USER ONLY ---------- */
    {
        path: '',
        component: Home,
        canActivate: [roleGuard],
        data: { roles: ['User'] }
    },
    {
        path: 'products',
        component: Products,
        canActivate: [roleGuard],
        data: { roles: ['User'] }
    },
    {
        path: "product-details/:id",
        loadComponent: () => import('./DashboardComponents/product-details/product-details').then((c) => c.ProductDetails),
        canActivate: [roleGuard],
        data: { role: ['User'] }
    },
    {
        path: 'about',
        component: About,
        canActivate: [roleGuard],
        data: { roles: ['User'] }
    },
    {
        path: 'contact',
        component: Contact,
        canActivate: [roleGuard],
        data: { roles: ['User'] }
    },
    {
        path: 'user',
        component: User,
        canActivate: [roleGuard],
        data: { roles: ['User'] },
        children: [
            { path: '', redirectTo: 'user-list', pathMatch: 'full' },
            { path: 'user-list', component: UserList },
            { path: 'settings', component: Settings }
        ]
    },
    {
        path: "chatAi",
        component: Chatbot,
        canActivate: [roleGuard],
        data: { roles: ['User'] }
    },
    {
        path: 'user-details/:id',
        component: UserDetails,
        canActivate: [roleGuard],
        data: { roles: ['User'] }
    },

    /* ---------- ADMIN ONLY ---------- */
    {
        path: 'dashboard',
        component: Dashboard,
        canActivate: [roleGuard],
        data: { roles: ['Admin'] },
        children: [
            { path: '', redirectTo: 'dashbordpage', pathMatch: 'full' },
            {
                path: 'dashbordpage',
                loadComponent: () =>
                    import('./DashboardComponents/dashbordpage/dashbordpage')
                        .then(c => c.Dashbordpage)
            },
            {
                path: 'product-list',
                loadComponent: () =>
                    import('./DashboardComponents/product-list/product-list')
                        .then(c => c.ProductList)
            },
            {
                path: 'customerpage',
                loadComponent: () =>
                    import('./DashboardComponents/customerpage/customerpage')
                        .then(c => c.Customerpage)
            },
            {
                path: "settings",
                component: Settings
            },
            {
                path: 'add-products',
                loadComponent: () =>
                    import('./pages/add-products/add-products')
                        .then(c => c.AddProducts)
            },
            {
                path: 'user-list',
                component: UserList
            },
        ]
    },

    /* ---------- FALLBACK ---------- */
    {
        path: '**',
        component: Notfound
    }
];
