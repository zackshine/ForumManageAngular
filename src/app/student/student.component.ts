import { Component, OnInit } from '@angular/core';
import {Student} from '../student'
import { Observable,of } from 'rxjs';
import { catchError,filter,map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';



import {StudentService} from '../student.service'
import { Event } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
 
  students: Student[] = [];
  event: any;
  stopwatchValue: number;
  stopwatchValue$: Observable<number>;
  constructor(private studentservice: StudentService) { }

  ngOnInit() {

     const observable = interval(1000);
     const subscription = observable.subscribe(x => console.log("test:" + x));
     subscription.unsubscribe();
    //
    const values = of(11, 22, 33, 44, 55);
    this.stopwatchValue$ = values;
    this.stopwatchValue$.subscribe(num =>{
      this.stopwatchValue = num;
      console.log(this.stopwatchValue);
    });
    //test simple Observable/Subscribe
    const studentsObservable = this.studentservice.getStudents();
    studentsObservable.subscribe((studentData:Student[])=>{

      console.log(studentData);
      this.students = studentData;
    })
    //test Rxjs map
    const nums = of(1, 2, 3);
    const squareValues = map((val: number) => val * val);
    const squaredNums = squareValues(nums);
    squaredNums.subscribe(x => console.log(x));

    //test Pipe
    const squareOdd = of(1, 2, 3, 4, 5)
      .pipe(
        filter(n => n % 2 !== 0),
        map(n => n * n)
      );
    squareOdd.subscribe(x => console.log(x));

    //test ajax(comment below)
    const apiData = ajax('https://localhost:5001/api/values').pipe(
      map(res => {
        if (!res.response) {
          throw new Error('Value expected!');
        }
        return res.response;
      }),
      catchError(err => of([]))
    );
    
    apiData.subscribe({
      next(x) { console.log('data: ', x); },
      error(err) { console.log('errors already caught... will not run'); }
    });
     //
     
    
   
    
  }

  onOpen(event){
    console.log("open")
  } 
  
  onClose(event){
    console.log("close")
  }

}
