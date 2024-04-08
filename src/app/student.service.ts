import { Injectable } from '@angular/core';
import {Student} from "./student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

   studentarray:any =new Array<Student>()
   passstudentarray:any
  constructor() { }

  entry(student:Student){

    this.studentarray.push(student);

  }

  view()
  {

    return this.studentarray
  }



}
