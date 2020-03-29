import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'flights',
    pathMatch: 'full'
  },
  {
    path: 'flights',
    loadChildren: './features/flight/flight.module#FlightModule'
  },
  {
    path: 'hotels',
    loadChildren: './features/hotels/hotels.module#HotelsModule'
  },
  {
    path: 'cars',
    loadChildren: './features/cars/car.module#CarModule'
  },
  {
    path: 'activity',
    loadChildren: './features/activity/activity.module#ActivityModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
