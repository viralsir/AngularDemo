import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {

  productgroup=new FormGroup({
    id:new FormControl(),
    pname:new FormControl(),
    qty:new FormControl(),
    rate:new FormControl()

  })

  productArray:any=[]
  title:string="new"
  saveproduct()
  {
    if(this.title=="new")
    {
      this.productArray.push(this.productgroup.value);

    }
    else {
           // this.productArray.forEach(element=>(element.id==this.productgroup.id){})
      for (let product of this.productArray){
              if(product.id==this.productgroup.value.id)
              {
                  product=this.productgroup.value;
                  //product.id=this.productgroup.value.id;

              }
      }

    }
    this.productgroup.reset();
    this.title="new";

  }

  editproduct(product:any)
  {
      this.productgroup.setValue(product);
      this.title="update"

  }



}
