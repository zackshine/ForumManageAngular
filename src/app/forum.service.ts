import { Injectable } from '@angular/core';
import {Forum} from './forum';
import {FORUMS} from './mock-forums';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{catchError,map,tap} from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private forumsUrl = 'http://localhost:5001/api/forums';
  
  constructor(
      private http:HttpClient,
      private messageService: MessageService
    ) { }

  getForums(): Observable<Forum[]>{
  
    return this.http.get<Forum[]>(this.forumsUrl)
    .pipe(
      tap(_ => this.log('fetched forums')),
      catchError(this.handleError<Forum[]>('getForums',[]))
    )
    // return of(FORUMS)
  }

  getForum(id:number): Observable<Forum>{
    const url = `${this.forumsUrl}/${id}`;
    return this.http.get<Forum>(url).pipe(
      tap(_=>this.log(`fetched form id=${id}`)),
      catchError(this.handleError<Forum>(`getForum id=${id}`))
    );
    // return of(FORUMS.find(forum=>forum.id==id));
  }

 updateForum(id:number,forum:Forum):Observable<any>{
   return this.http.put(`${this.forumsUrl}/${id}`, forum, httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${forum.id}`)),
    catchError(this.handleError<any>('updateHero'))
   );
 }

 addForum(forum:Forum):Observable<Forum>{
   return this.http.post<Forum>(this.forumsUrl,forum,httpOptions).pipe(
     tap((newforum:Forum)=>this.log(`added hero w/ id=${newforum.id}`)),
     catchError(this.handleError<Forum>(`addForum`))
   )
 }
 deleteForum(id:number) :Observable<Forum>{
  //  const id = typeof forum === 'number' ? forum:forum.id;
   const url = `${this.forumsUrl}/${id}`;
   return this.http.delete<Forum>(url,httpOptions).pipe(
     tap(_=>this.log(`deleted forum id=${id}`)),
     catchError(this.handleError<Forum>('deleteForum'))
   );
 }
  private log(message:string){
    this.messageService.add('ForumService:${message}')
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}


