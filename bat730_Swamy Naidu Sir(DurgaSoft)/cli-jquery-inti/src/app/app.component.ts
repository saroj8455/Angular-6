import { Component } from '@angular/core';
import $ from "jquery"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
fun1(){
  $(".i1").animate({left:"600px",width:'400px',height:'400px'},2000)
}
}
