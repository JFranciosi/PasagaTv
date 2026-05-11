import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Profile } from './components/profile/profile';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: Home,
        title: 'Home'
    },
    {
        path: 'profile',
        component: Profile,
        title: 'Profile'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];


