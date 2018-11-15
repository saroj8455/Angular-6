import { Component } from '@angular/core';
import {trigger,state,style,transition,animate} from "@angular/animations"
var arr=[trigger("trg1",[
  state("s1",style({top:"-500px"})),
  state("s2",style({top:"80px"})),
  transition("s1<=>s2",animate("1500ms"))
])]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:arr
})
export class AppComponent {
  tmp="s1"
  fun1(){
    if(this.tmp=="s1")
    this.tmp="s2"
    else
    this.tmp="s1"
  }
}
