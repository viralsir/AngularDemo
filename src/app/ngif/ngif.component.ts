import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent {

  isVisible:boolean=true;
  title:string="hide";
  entryvisible:boolean=false;
  viewvisible:boolean=false;

  showhide()
  {
     if(this.isVisible)
     {
        this.isVisible=false;
        this.title="show";
     }
     else {
        this.isVisible=true;
        this.title="hide";
     }
  }

  entrybtnclicked()
  {
    this.entryvisible=true;
    this.viewvisible=false;
  }
  viewbtnclicked(){
    this.entryvisible=false;
    this.viewvisible=true;
  }

}
