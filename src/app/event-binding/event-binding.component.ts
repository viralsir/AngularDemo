import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  passOrfail:string=""
  passingmark:number=35;
  total:any=""
  avg:any=""
  Grade:any=""
  failStyle:string="background-color:red";
  passstyle:string="background-color:white";
  marksheet(maths:any,science:any,english:any){

    let mathsmark=parseInt(maths.value);
    let sciencemark=parseInt(science.value);
    let englishmark=parseInt(english.value);

    if(mathsmark>=this.passingmark && sciencemark>=this.passingmark && englishmark>=this.passingmark)
    {
       this.passOrfail="You are Passed";
       maths.style=this.passstyle;
       science.style=this.passstyle;
       english.style=this.passstyle;
       this.total=(mathsmark+sciencemark+englishmark);
       this.avg=this.total/3;
       if(this.avg>=90)
         this.Grade="A";
       else if(this.avg>=70)
         this.Grade="B";
       else if(this.avg>=55)
         this.Grade="C";
      else
        this.Grade="D";

      this.total="total :"+ (mathsmark+sciencemark+englishmark);
      this.avg="Avg :"+this.avg;
      this.Grade="Grade :"+this.Grade
    }
    else
    {
           this.passOrfail="You are Fail";
           this.total="";
           this.avg="";
           this.Grade="";
           if(mathsmark<this.passingmark)
          {
             maths.style=this.failStyle;
          }
          if(sciencemark<this.passingmark)
          {
            science.style=this.failStyle;
          }
          if(englishmark<this.passingmark)
          {
            english.style=this.failStyle;
          }
    }

    console.log("marksheet() is called");
  }

}
