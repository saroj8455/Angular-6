import { Component ,Inject} from '@angular/core';
import {class1} from "./cls"
import {class2} from "./cls2"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(@Inject (class1) public obj1,@Inject (class2) public obj2){
}

}
