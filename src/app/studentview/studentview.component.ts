import { Component } from '@angular/core';
import {StudentService} from "../student.service";

@Component({
  selector: 'app-studentview',
  templateUrl: './studentview.component.html',
  styleUrls: ['./studentview.component.css']
})
export class StudentviewComponent {


  constructor(public sservice:StudentService) {
  }

}
