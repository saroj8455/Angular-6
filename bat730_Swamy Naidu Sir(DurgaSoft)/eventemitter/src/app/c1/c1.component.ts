import { Component, OnInit, Inject } from '@angular/core';
import {cls1} from "../test"
import {S1Service} from "../s1.service"
@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component  {
obj:cls1=new cls1()
  constructor(@Inject(S1Service) public inj1) { 
    inj1.myevent.subscribe(dt=>{
      //console.log(dt)
      this.obj=dt
    })
  }


}
