import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-tdf-form',
  templateUrl: './tdf-form.component.html',
  styleUrls: ['./tdf-form.component.css']
})
export class TdfFormComponent {

   msg:string="";
   checkuser(loginformRef:NgForm){
        console.log(loginformRef.value);
       let logindata=loginformRef.value;
       if(logindata.username=="admin" && logindata.password=="123")
       {
          this.msg="Login Successfully";
       }
       else{
          this.msg="Wrong username or password";
       }

   }
}
