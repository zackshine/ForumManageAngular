import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{DashboardComponent} from './dashboard/dashboard.component';
import {ForumsComponent} from './forums/forums.component';
import{ForumDetailComponent} from './forum-detail/forum-detail.component';
import{ForumAddComponent} from './forum-add/forum-add.component'
import {EngineerComponent} from './engineer/engineer.component';
import{EngineerDetailComponent} from './engineer-detail/engineer-detail.component';
import{EngineerAddComponent} from './engineer-add/engineer-add.component'
import { StudentComponent } from './student/student.component';


const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'forums',component:ForumsComponent},
  {path:'forums/add',component:ForumAddComponent},
  {path:'forums/edit/:id',component:ForumAddComponent},
  {path:'forums/detail/:id',component:ForumDetailComponent},
  {path:'engineers',component:EngineerComponent},
  {path:'engineers/add',component:EngineerAddComponent},
  {path:'engineers/edit/:id',component:EngineerAddComponent},
  {path:'students',component:StudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
