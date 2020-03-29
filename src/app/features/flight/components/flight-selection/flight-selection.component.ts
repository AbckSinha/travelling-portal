import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FlightService } from '../../../../core/services/flight/flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-selection',
  templateUrl: './flight-selection.component.html',
  styleUrls: ['./flight-selection.component.scss']
})

export class FlightSelectionComponent implements OnInit {
  flightForm: any;
  formData: any;
  flights: any;
  travellerCount = [];
  departure = new FormControl('', [Validators.required]);
  destination = new FormControl('', [Validators.required]);
  departDate = new FormControl('', [Validators.required]);
  returnDate = new FormControl('', [Validators.required]);
  travellers = new FormControl('', [Validators.required]);
  class = new FormControl('', [Validators.required]);

  constructor(public formBuilder: FormBuilder,
    public readonly flightService: FlightService,
    public router: Router) { }

  ngOnInit() {
    this.initialize();
    this.onChanges();
    this.loadTravellers();
  }



  initialize() {
    this.flightForm = this.formBuilder.group({
      departure: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      departDate: ['', [Validators.required]],
      returnDate: ['', [Validators.required]],
      travellers: ['', [Validators.required]],
      class: ['', [Validators.required]],
    });
    this.loadData();
  }

  onChanges() {
    this.flightForm.get('departure').valueChanges.subscribe(val => {
      this.loadData();
    });
    this.flightForm.get('destination').valueChanges.subscribe(val => {
      this.loadData();
    });
    this.flightForm.get('departDate').valueChanges.subscribe(val => {
      this.loadData();
    });
    this.flightForm.get('returnDate').valueChanges.subscribe(val => {
      this.loadData();
    });
    this.flightForm.get('travellers').valueChanges.subscribe(val => {
      this.loadData();
    });
    this.flightForm.get('class').valueChanges.subscribe(val => {
      this.loadData();
    });
  }

  loadTravellers() {
    this.travellerCount = [
      {
        name: '1 Adult',
        value: 1
      },
      {
        name: '2 Adult',
        value: 2
      },
      {
        name: '3 Adult',
        value: 3
      },
      {
        name: '4 Adult',
        value: 4
      }
    ];
  }

  loadData() {
    this.formData = {
      departure: this.flightForm.controls.departure.value,
      destination: this.flightForm.controls.destination.value,
      departDate: this.flightForm.controls.departDate.value,
      returnDate: this.flightForm.controls.returnDate.value,
      travellers: this.flightForm.controls.travellers.value,
      class: this.flightForm.controls.class.value,
    };
    console.log('this.formData', this.formData);
  }

  search() {
    this.loadData();
    this.flightService.getFlights(this.formData).then((res) => {
      this.flightService.setFlightData(res);
      this.flights = res;
    }, (err) => {
      console.log('erro in getting flight result', err);
    });
  }
}
