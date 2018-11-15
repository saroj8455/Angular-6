import { Component, Inject } from '@angular/core';
import {Http} from "@angular/http"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(Http) public obj){}
str:string="scott"
fun1(){
  this.str="ABCD"
  this.obj.get("p1.html").subscribe((dt)=>{
this.str=dt._body
  },function(){
alert("Failed")
  })
}
}
