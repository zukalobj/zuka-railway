import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { authGuard } from './guards/auth.guard';

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
        loadComponent:()=>import('./tickets/tickets.component').
        then(p=>p.TicketsComponent),
        canActivate:[authGuard]
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
        path:'login',
        loadComponent:()=>import('./login/login.component')
        .then(p=>p.LoginComponent),
        
    },
       {
        path:'register',
        loadComponent:()=>import('./register/register.component')
        .then(p=>p.RegisterComponent),
        
    },
    {
        path:'**',
        component:ErrorComponent
    }
];
