import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../../../core/services/flight/flight.service';

@Component({
  selector: 'app-flight-results',
  templateUrl: './flight-results.component.html',
  styleUrls: ['./flight-results.component.scss']
})
export class FlightResultsComponent implements OnInit {
  flights: any;

  constructor(public readonly flightService: FlightService) { }

  ngOnInit() {
    this.flightService.getFlightData().subscribe((res) => {
      if (res) {
        this.flights = res;
        console.log(' this.flights', this.flights);
      }
    });
  }

}
