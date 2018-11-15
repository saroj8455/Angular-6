import { Component, Inject } from '@angular/core';
import {cls1} from "./test"
import {S1Service} from "./s1.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
obj:cls1=new cls1()
constructor(@Inject(S1Service) public inj){

}
funupdate(){
  this.inj.myevent.emit(this.obj)
  alert("hi")
}
}
