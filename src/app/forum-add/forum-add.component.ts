import { Component, OnInit, Input } from '@angular/core';
import { Forum } from '../forum';
import{ForumService} from '../forum.service'
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-forum-add',
  templateUrl: './forum-add.component.html',
  styleUrls: ['./forum-add.component.css']
})
export class ForumAddComponent implements OnInit {
  @Input() forum: Forum;
  
  constructor(
      private forumService:ForumService,
      private route:ActivatedRoute,
      private location:Location,
    ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.forum = new Forum();
    if(!id){
      return;
     
    }else{
      this.getForum();
    }
    
    
  }

  getForum():void{
    const id = +this.route.snapshot.paramMap.get('id');

    this.forumService.getForum(id)
        .subscribe(forum=>this.forum = forum)
  }
  addForum():void{
    const id = +this.route.snapshot.paramMap.get('id');
    if(!id){
      this.forumService.addForum(this.forum)
        .subscribe(()=>this.goBack());
    }else{
      this.forumService.updateForum(id,this.forum)
      .subscribe(()=>this.goBack());
    }
    
   
  }

  goBack():void{
    this.location.back();
  }
}
