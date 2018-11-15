import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uname:string="scott"
  obj=[{
    uname:'scott',sal:"7000"
  },{
    
    uname:'ram',sal:"11000"
  },{
    
    uname:'john',sal:"4000"
  },{
    
    uname:'amith',sal:"17000"
  }]
}
