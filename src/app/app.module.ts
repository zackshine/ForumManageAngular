import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForumsComponent } from './forums/forums.component';
import { ForumDetailComponent } from './forum-detail/forum-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ForumsComponent,
    ForumDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
