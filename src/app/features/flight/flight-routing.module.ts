import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlightResultsComponent, FlightSelectionComponent } from './components';



const routes: Routes = [
    {
        path: '',
        component: FlightSelectionComponent
    },
    {
        path: 'flights/results',
        component: FlightResultsComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FlightRoutingModule { }
