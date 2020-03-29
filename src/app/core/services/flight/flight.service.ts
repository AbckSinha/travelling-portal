import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { timeout, catchError } from 'rxjs/operators';
import { Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  flightResultData: any;
  public flightResultSubject: Subject<Object> = new ReplaySubject<Object>(1);

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'offset': new Date().getTimezoneOffset().toString()
    })
  };

  constructor(public readonly http: HttpClient) { }

  getFlights(data: any) {
   const url = '../../../../../assets/mocks/flights.json';
    const req = {
      departure: data.departure,
      destination: data.destination,
      departDate: data.departDate,
      returnDate: data.returnDate,
      travellers: data.travellers,
      class: data.class,
    };

    return this.http.get(url, this.httpOptions)
      .pipe(timeout(240000), catchError(e => {
        console.log('e>>>>>>>>>>>>>>>>>>>>>>', e);
        return e;
      }))
      .toPromise()
      .then((res) => {
        console.log('res in service', res);
        this.flightResultData = res;
        this.flightResultSubject.next(this.flightResultData);
        return this.flightResultData;
      });
  }

  setFlightData(data: any) {
    this.flightResultData = data;
    this.flightResultSubject.next(this.flightResultData);
  }

  getFlightData() {
    return this.flightResultSubject;
  }

}
