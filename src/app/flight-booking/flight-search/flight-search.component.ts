import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { FlightService } from './flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  
  // flights: Array<Flight> = [];
  // {{ flights }}
  get flights() {
    return this.flightService.flights;
  }


  basket: object = {
    "3": true,
    "5": true
  };

  // private http: HttpClient;

  constructor(
    private flightService: FlightService,
    private snackBar: MatSnackBar,
    private http: HttpClient) { 
    // this.http = http;
  }

  ngOnInit() {
  }

  search(): void {

    this.flightService.load(this.from, this.to);

    

    // if (!this.from || !this.to) throw new Error('from and/or to need a value!');

    // this.flights = [
    //   {
    //     id: 4711,
    //     from: 'Graz',
    //     to: 'Flagranti',
    //     date: '2018-06-25T17:00:00'
    //   },
    //   {
    //     id: 4712,
    //     from: 'Graz',
    //     to: 'Kognito',
    //     date: '2018-06-25T17:30:00'
    //   },
    //   {
    //     id: 4713,
    //     from: 'Graz',
    //     to: 'Mallorca',
    //     date: '2018-06-25T18:00:00'
    //   }
    // ];
  }

  select(f: Flight) {
  }

}
