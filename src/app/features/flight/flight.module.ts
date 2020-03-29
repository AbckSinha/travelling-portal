import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightRoutingModule } from './flight-routing.module';
import { FlightResultsComponent, FlightSelectionComponent } from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    FlightRoutingModule
  ],
  declarations: [FlightResultsComponent, FlightSelectionComponent]
})
export class FlightModule { }
