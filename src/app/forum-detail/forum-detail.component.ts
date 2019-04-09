import { Component, OnInit,Input} from '@angular/core';
import {Forum} from '../forum';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ForumService} from '../forum.service';

@Component({
  selector: 'app-forum-detail',
  templateUrl: './forum-detail.component.html',
  styleUrls: ['./forum-detail.component.css']
})
export class ForumDetailComponent implements OnInit {
  @Input() forum:Forum;
  constructor(
    private route:ActivatedRoute,
    private forumService:ForumService,
    private location:Location
  ) { }

  ngOnInit():void {
    this.getForum();
  }
  
  getForum():void{
    const id = +this.route.snapshot.paramMap.get('id');

    this.forumService.getForum(id)
        .subscribe(forum=>this.forum = forum)
  }
  goBack():void{
    this.location.back();
  }
  save():void{
    this.forumService.updateForum(this.forum.id,this.forum)
    .subscribe(()=>this.goBack());
  }
}
