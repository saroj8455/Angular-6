import { Component } from '@angular/core';
import {trigger,state,style,transition,animate} from "@angular/animations"

var arr=[trigger("trg1",[
  state("st1",style({backgroundColor:'red',width:'100px',height:'100px'})),
  state("st2",style({backgroundColor:"green",width:'400px',height:'400px'})),
  transition("*=>*",animate("1500ms"))
])]


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:arr
})

export class AppComponent {
tmp="st1"
}
