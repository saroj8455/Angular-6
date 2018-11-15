import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  t1;t2
funcreate(){
  localStorage.setItem(this.t1,this.t2)
}
funget(){
  alert(localStorage.getItem(this.t1))
}
fundel(){
  localStorage.removeItem(this.t1)
}
}
