import { Component, Inject } from '@angular/core';
import {cls1} from "./newfile"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tmp=false
constructor(@Inject (cls1) public obj){

}
}
