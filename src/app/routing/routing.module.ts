import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from '../app.component';
import { AboutComponent } from '../about/about.component';


// Defining routes
const routes: Routes = [
  {path: 'Home', component: AppComponent},
  {path: 'About', component: AboutComponent},
  {path: '', redirectTo: '/app', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
