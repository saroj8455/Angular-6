import { Component, OnInit, Inject } from '@angular/core';
import {Router} from "@angular/router"
import {cls1} from "../newfile"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(@Inject(Router) public rt,@Inject(cls1) public obj) { }
  t1;t2
funlogin(){
  if(this.t1=="scott" && this.t2=="scott123")
  {
    this.obj.tmp=false
    this.rt.navigateByUrl("welc")
  }
  else
  {
    alert("Invalid")
  }
}
  ngOnInit() {
  }

}
