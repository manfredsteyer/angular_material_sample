import { Routes } from "@angular/router";
import { FlightSearchComponent } from "./flight-search/flight-search.component";
import { FlightEditComponent } from "./flight-edit/flight-edit.component";
import { PassengerComponent } from "./passenger/passenger.component";

export const FLIGHT_BOOKING_ROUTES: Routes = [
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
];