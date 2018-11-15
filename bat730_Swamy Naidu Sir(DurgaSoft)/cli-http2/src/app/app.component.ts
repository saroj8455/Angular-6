import { Component, Inject } from '@angular/core';
import {Http} from "@angular/http"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject (Http) private ob){

  }
  str;
  ngOnInit(){
    setInterval(()=>{
      this.ob.get("score.html").subscribe(dt=>{
        this.str=dt._body
        })
    },2000)
  }
funget(){
}
}
