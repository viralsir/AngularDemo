import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {

  name:string="vimal"
  age:number=24
  isdisabled:boolean=false;
  style:string="color:blue;background-color:yellow"


}
