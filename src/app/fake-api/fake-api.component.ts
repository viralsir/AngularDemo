import { Component } from '@angular/core';
import {FakeModel} from "../fake-model";
import {FakeService} from "../fake.service";

@Component({
  selector: 'app-fake-api',
  templateUrl: './fake-api.component.html',
  styleUrls: ['./fake-api.component.css']
})
export class FakeApiComponent {

  fakeModelarray:Array<FakeModel>=[];

  constructor(public fakeservice:FakeService) {
  }

  display()
  {
       this.fakeservice.postjsonapi().subscribe(data=>this.fakeModelarray=data,error=>console.log(error),()=>console.log("data has been fatched successfully"))

  }

}
