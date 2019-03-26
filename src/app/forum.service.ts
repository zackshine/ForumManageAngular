import { Injectable } from '@angular/core';
import {Forum} from './forum';
import {FORUMS} from './mock-forums';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private messageService: MessageService) { }

  getForums(): Observable<Forum[]>{
    this.messageService.add('ForumService:fetched forums');
    return of(FORUMS)
  }
}
