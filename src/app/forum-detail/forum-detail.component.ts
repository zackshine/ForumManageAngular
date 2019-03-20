import { Component, OnInit,Input} from '@angular/core';
import {Forum} from '../forum';

@Component({
  selector: 'app-forum-detail',
  templateUrl: './forum-detail.component.html',
  styleUrls: ['./forum-detail.component.css']
})
export class ForumDetailComponent implements OnInit {
  @Input() forum:Forum;
  constructor() { }

  ngOnInit() {
  }

}
