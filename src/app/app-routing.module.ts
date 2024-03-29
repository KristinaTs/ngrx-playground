import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CitiesComponent} from './cities/cities.component';

const routes: Routes = [
  {
    path: '',
    component: CitiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
