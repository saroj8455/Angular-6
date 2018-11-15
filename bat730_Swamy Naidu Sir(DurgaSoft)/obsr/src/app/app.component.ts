import { Component, Inject } from '@angular/core';
import {ObjserService} from "./objser.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  t1;
  constructor(@Inject(ObjserService) public objref){
    this.objref.currentmessage.subscribe(dt=>{
      this.t1=dt
    })
  }
  fun1(){
    this.objref.changeMessage(this.t1)
  }
}
