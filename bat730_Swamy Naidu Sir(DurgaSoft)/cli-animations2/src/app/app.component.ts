import { Component } from '@angular/core';
import {trigger,state,style,transition,animate} from "@angular/animations"

var ar=[trigger("tr1",[
  state("s1",style({left:"0px",width:"30px",height:"30px"})),
  state("s2",style({left:"600px",width:"200px",height:"200px"})),
  transition("*=>*",animate("2000ms"))
])]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:ar
})
export class AppComponent {
  tmp="s1"
  fun1(){
    this.tmp="s2"
  }
}
