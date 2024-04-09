import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {StudentService} from "../student.service";
import {Student} from "../student";

@Component({
  selector: 'app-studententry',
  templateUrl: './studententry.component.html',
  styleUrls: ['./studententry.component.css']
})
export class StudententryComponent {

  msg:string=""
  constructor(public sservice:StudentService)
  {

  }

  studententrygroup:FormGroup=new FormGroup({
    rollno:new FormControl(""),
    name:new FormControl(),
    maths:new FormControl(),
    science:new FormControl(),
    english:new FormControl()
  })

  entry()
  {
        //console.log(this.studententrygroup.value);

       let  student=new Student();
        student.rollno=parseInt(this.studententrygroup.value.rollno);
        student.name=this.studententrygroup.value.name;
        student.maths=parseInt(this.studententrygroup.value.maths);
        student.english=parseInt(this.studententrygroup.value.english);
        student.science=parseInt(this.studententrygroup.value.science);

        this.sservice.studentarray.push(student)
        this.studententrygroup.reset()
        this.msg="record has  been saved"

}



}
