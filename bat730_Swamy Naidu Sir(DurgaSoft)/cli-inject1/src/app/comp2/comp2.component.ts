import { Component, OnInit, Inject } from '@angular/core';
import {class1} from "../cls"
import {class2} from "../cls2"
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(@Inject(class1) public obj1,@Inject (class2) public obj2 ) { }
  ngOnInit() {
    
  }

}
