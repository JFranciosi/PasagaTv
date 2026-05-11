import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Review } from './components/review/review';
import { HomeDetails } from './components/home-details/home-details';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: Home,
        title: 'Home'
    },
    {
        path: 'home-details/:id',
        component: HomeDetails,
        title: 'Home Details'
    },
    {
        path: 'review',
        component: Review,
        title: 'Review'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];


