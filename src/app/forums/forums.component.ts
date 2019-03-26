import { Component, OnInit } from '@angular/core';
import {Forum} from '../forum';
import {FORUMS} from '../mock-forums';
import{ForumService} from '../forum.service';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponent implements OnInit {
  
  // forums = FORUMS;
  forums:Forum[];
  selectedForum: Forum;
  
  
  constructor(private forumService:ForumService) { }

  ngOnInit() {
    this.getForums();
  }

  onSelect(forum: Forum) : void {
    this.selectedForum = forum;
  }

  getForums(): void{
    this.forumService.getForums()
           .subscribe(forums=>this.forums = forums);
  }
  
  
}
