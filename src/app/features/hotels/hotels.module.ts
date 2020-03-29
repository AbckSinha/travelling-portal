import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsRoutingModule } from './hotels-routing.module';
import { ContainersComponent } from './containers/containers.component';

@NgModule({
  imports: [
    CommonModule,
    HotelsRoutingModule
  ],
  declarations: [ContainersComponent]
})
export class HotelsModule { }
