import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
uname:string;
pwd:string;
msg:string;
funlogin(){
  if(this.uname=="admin" && this.pwd=="admin")
{
  this.msg="Valid"
}
else
{
  this.msg="Invalid"
}
}
}
