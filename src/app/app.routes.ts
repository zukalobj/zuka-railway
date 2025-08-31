import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        loadComponent:()=>import('./home/home.component').then(p=>p.HomeComponent)
    },
        {
        path:'tickets',
        loadComponent:()=>import('./tickets/tickets.component').then(p=>p.TicketsComponent)
    },
        {
        path:'trips',
        loadComponent:()=>import('./trips/trips.component').then(p=>p.TripsComponent)
    },
        {
        path:'contact',
        loadComponent:()=>import('./contact/contact.component').then(p=>p.ContactComponent)
    },
    {
        path:'**',
        component:ErrorComponent
    }
];
