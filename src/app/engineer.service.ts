import { Injectable } from '@angular/core';
import {Engineer} from './Engineer';
// import {EngineerS} from './mock-Engineers';
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
export class EngineerService {
  private EngineersUrl = 'https://localhost:5001/api/engineers';
  
  constructor(
      private http:HttpClient,
      private messageService: MessageService
    ) { }

    getCurrentUser() {

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        withCredentials: true
       };
      return this.http.get('http://localhost:52891/api/values', httpOptions)
        .toPromise();
    }

  getEngineers(): Observable<any>{
    const httpOptions2 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
     };
    return this.http.get(this.EngineersUrl, httpOptions2)
            .pipe(map((response: Response) => {
                return response;
            }), catchError(error => {
               
                return Promise.reject(error);
            }));
  
    // return this.http.get<Engineer[]>(this.EngineersUrl)
    // .pipe(
    //   tap(_ => this.log('fetched Engineers')),
    //   catchError(this.handleError<Engineer[]>('getEngineers',[]))
    // )
    // return of(EngineerS)
  }

  getEngineer(id:number): Observable<Engineer>{
    const url = `${this.EngineersUrl}/${id}`;
    return this.http.get<Engineer>(url).pipe(
      tap(_=>this.log(`fetched form id=${id}`)),
      catchError(this.handleError<Engineer>(`getEngineer id=${id}`))
    );
    // return of(EngineerS.find(Engineer=>Engineer.id==id));
  }

 updateEngineer(id:number,Engineer:FormData):Observable<any>{
   return this.http.put(`${this.EngineersUrl}/${id}`, Engineer).pipe(
    tap(_ => this.log(`updated hero id=${id}`)),
    catchError(this.handleError<any>('updateHero'))
   );
 }

 addEngineer(Engineer:FormData):Observable<Engineer>{
   return this.http.post<Engineer>(this.EngineersUrl,Engineer).pipe(
     tap((newEngineer:Engineer)=>this.log(`added hero w/ id=${newEngineer.id}`)),
     catchError(this.handleError<Engineer>(`addEngineer`))
   )
 }
 deleteEngineer(id:number) :Observable<Engineer>{
  //  const id = typeof Engineer === 'number' ? Engineer:Engineer.id;
   const url = `${this.EngineersUrl}/${id}`;
   return this.http.delete<Engineer>(url,httpOptions).pipe(
     tap(_=>this.log(`deleted Engineer id=${id}`)),
     catchError(this.handleError<Engineer>('deleteEngineer'))
   );
 }
  private log(message:string){
    this.messageService.add('EngineerService:${message}')
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


