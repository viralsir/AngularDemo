import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MdfComponent {

  loginformgroup=new FormGroup({
    username:new FormControl("",[Validators.required,Validators.min(8)]),
    password:new FormControl()

  })
  msg:string=""
  checkuser()
  {
    let logindata=this.loginformgroup.value;
    if(logindata.username=="admin" && logindata.password=="123")
    {
      this.msg="Login is Successful"
    }
    else {
       this.msg="wrong username or passwrod"
    }
     console.log(this.loginformgroup.value);
  }




}
