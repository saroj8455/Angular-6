import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  public arr:Student[]=[
    {"sname":"Scoot","course":"angular"},
    {"sname":"Jhon","course":"UI"},
    {"sname":"Anthem","course":"Pythan"},
    {"sname":"Cybr","course":"Django"},
    {"sname":"Cott","course":"Oracle 12c"},
  ]
//property binding
public uname:string="Ganesh";
public age:number=23;
public x:boolean=true;

//two way databinding 
public backColor:string="";


  
  
}

class Student{
  public sname:string=""
  public course:string=""
}
