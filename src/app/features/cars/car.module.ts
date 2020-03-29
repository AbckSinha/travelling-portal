import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarRoutingModule } from './car-routing.module';
import { ContainersComponent } from './containers/containers.component';

@NgModule({
  imports: [
    CommonModule,
    CarRoutingModule
  ],
  declarations: [ContainersComponent]
})
export class CarModule { }
