import { Component } from '@angular/core';

@Component({
  selector: 'home-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  age:number = 23;
  address:string="Naranpura";
  no1=23;
  no2=34;
}
