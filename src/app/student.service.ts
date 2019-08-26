import { Injectable } from '@angular/core';
import { Student } from './student';

import { Observable,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class StudentService {

  students: Student[] = [{
    id: 1,
    name: 'Krunal',
    EnrollmentNumber: 110470116021,
    College: 'VVP Engineering College',
    University: 'GTU'
},
{
    id: 2,
    name: 'Rushabh',
    EnrollmentNumber: 110470116023,
    College: 'VVP Engineering College',
    University: 'GTU'
},
{
    id: 3,
    name: 'Ankit',
    EnrollmentNumber: 110470116022,
    College: 'VVP Engineering College',
    University: 'GTU'
}];

  
  constructor() { }
  
  public getStudents(): any {
    const nums = of(1, 2, 3);
    const studentsObservable = new Observable(observer => {
         
           setTimeout(() => {
               observer.next(this.students);
           }, 1000);
    });

    return studentsObservable;
  }
}
