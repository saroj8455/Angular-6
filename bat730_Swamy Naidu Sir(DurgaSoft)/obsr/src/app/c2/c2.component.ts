import { Component, OnInit, Inject } from '@angular/core';
import {ObjserService} from "../objser.service"
@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
tmp=0
  constructor(@Inject (ObjserService) private ob) { 
    this.ob.currentmessage.subscribe(dt=>{
      this.tmp=dt
    })
  }

  ngOnInit() {
  }

}
