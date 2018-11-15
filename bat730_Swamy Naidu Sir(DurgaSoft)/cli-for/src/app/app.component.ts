import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fun1(indx){
    var x=null
     x=confirm("You want to delete")
    
    if(x)
    this.obj.splice(indx,1)
  }
   obj=[{
    uname:"scott",city:"hyd"
  },{
    uname:"John",city:"Sec"
  },{
    uname:"Sam",city:"Chennai"
  },{
    uname:"scott",city:"hyd"
  },{
    uname:"John",city:"Sec"
  },{
    uname:"Sam",city:"Chennai"
  }]
}
