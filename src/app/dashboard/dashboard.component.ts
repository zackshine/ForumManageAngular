import { Component, OnInit } from '@angular/core';
import {Forum} from '../forum';
import {ForumService} from '../forum.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  forums: Forum[] = [];

  constructor(private forumservice: ForumService ) { }

  ngOnInit() {
    this.getForums();
  }

  getForums():void{
    this.forumservice.getForums().subscribe(forums=>this.forums = forums)
  }

}
