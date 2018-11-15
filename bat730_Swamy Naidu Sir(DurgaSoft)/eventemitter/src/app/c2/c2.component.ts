import { Component, OnInit, Inject } from '@angular/core';
import {cls1} from "../test"
import {S1Service} from "../s1.service"
@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component {
objnew:cls1=new cls1()
  constructor(@Inject (S1Service) public injj) { 
injj.myevent.subscribe(dtt=>{
  this.objnew
})
  }


}
