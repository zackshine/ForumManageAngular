import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForumsComponent } from './forums/forums.component';
import { ForumDetailComponent } from './forum-detail/forum-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { ForumAddComponent } from './forum-add/forum-add.component';
import { EngineerComponent } from './engineer/engineer.component';
import { EngineerDetailComponent } from './engineer-detail/engineer-detail.component';
import { EngineerAddComponent } from './engineer-add/engineer-add.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HighlightDirective } from './Directives/highlight.directive';
import { StudentComponent } from './student/student.component';
import { ZippyComponent } from './zippy/zippy.component';

// import { AlertModule } from 'bootstrap';
// import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
// import {InMemoryDataService} from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    ForumsComponent,
    ForumDetailComponent,
    ForumAddComponent,
    MessagesComponent,
    DashboardComponent,
    ForumAddComponent,
    EngineerComponent,
    EngineerDetailComponent,
    EngineerAddComponent,
    AdBannerComponent,
    HighlightDirective,
    StudentComponent,
    ZippyComponent
  ],
  imports: [
    // AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
