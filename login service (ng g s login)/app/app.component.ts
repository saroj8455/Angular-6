import { Component } from '@angular/core';

//step -3  import LoginserviceService 
import {LoginserviceService} from './loginservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

public s1:string="";
public s2:string="";

//display the result variable in front-end
public result:string="";

//create constructor object step-4
constructor(private serviceObj:LoginserviceService){}

//step-5 create a function for check login
public f1():void{
  this.result=this.serviceObj.isValid(this.s1,this.s2);
  alert(this.result);
}


}
