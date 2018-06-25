import { FlightEditComponent } from './flight-booking/flight-edit/flight-edit.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { PassengerComponent } from './flight-booking/passenger/passenger.component';


export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    { 
        path: 'flight-search',
        component: FlightSearchComponent
    },
    {
        path: 'flight-edit/:id',
        component: FlightEditComponent
    },
    {
        path: 'passenger-search',
        component: PassengerComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
]