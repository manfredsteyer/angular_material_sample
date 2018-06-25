import { MatSnackBar } from '@angular/material';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../../entities/flight';

@Injectable({
  providedIn: 'root' // <-- root == Global
})
export class FlightService {

  flights: Flight[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient) { }

  load(from: string, to: string): void {
    this.find(from, to).subscribe(
      flights => {
        this.flights = flights;
        this.snackBar.open(flights.length + ' flights loaded!', 'OK', { duration: 3000});
       },
       err => {
         console.error('Error loading flights!', err);
         this.snackBar.open('Error loading flights: ' + err, 'OK', { duration: 3000});
       }
    )
  }

  find(from: string, to: string): Observable<Flight[]> {
    
    const url = 'http://www.angular.at/api/flight';
    const params = new HttpParams()
                        .set('from', from)
                        .set('to', to);

    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, {params, headers});

  }

}
