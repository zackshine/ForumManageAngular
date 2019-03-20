import { Component, OnInit } from '@angular/core';
import {Forum} from '../forum';
import {FOURMS} from '../mock-forums';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponent implements OnInit {
  
  forums = FOURMS;
  selectedForum: Forum;
  
  
  constructor() { }

  ngOnInit() {
    
  }

  onSelect(forum: Forum) : void {
    this.selectedForum = forum;
  }
  
  
}
