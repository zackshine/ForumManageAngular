import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForumsComponent} from './forums/forums.component';
import{DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'forms',component:ForumsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
