import { Component } from '@angular/core';
import {FormGroup,FormControl,Validator, Validators} from "@angular/forms"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myform:FormGroup
  constructor(){
    this.myform=new FormGroup({
      username:new FormControl("",[Validators.required,Validators.minLength(5)]),
      age:new FormControl("",[Validators.required,Validators.pattern('["0-9"]*')])
    })
  }
}
