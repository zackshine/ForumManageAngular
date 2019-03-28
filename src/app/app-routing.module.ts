import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForumsComponent} from './forums/forums.component';
import{DashboardComponent} from './dashboard/dashboard.component';
import{ForumDetailComponent} from './forum-detail/forum-detail.component'

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'forms',component:ForumsComponent},
  {path:'detail/:id',component:ForumDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
