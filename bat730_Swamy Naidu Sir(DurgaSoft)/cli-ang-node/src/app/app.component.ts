import { Component,Inject } from '@angular/core';
import {Http} from "@angular/http"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject (Http) public obj){

  }
  fun2(){
    var ob={uname:"scott",city:"hyd"}
    this.obj.post("/met2",ob).subscribe(x=>{
      alert(x._body)
    })
  }
fun1(){
this.obj.get("/met1").subscribe(function(x){
  alert(x._body)
})
}
}
