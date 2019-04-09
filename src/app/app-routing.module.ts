import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForumsComponent} from './forums/forums.component';
import{DashboardComponent} from './dashboard/dashboard.component';
import{ForumDetailComponent} from './forum-detail/forum-detail.component';
import{ForumAddComponent} from './forum-add/forum-add.component'

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'forums',component:ForumsComponent},
  {path:'forums/add',component:ForumAddComponent},
  {path:'forums/edit/:id',component:ForumAddComponent},
  {path:'detail/:id',component:ForumDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
