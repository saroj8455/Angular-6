import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tmp=1;ordvar=false;or="uname"
  fun1(){
    alert("clicked")
  }
  funorder(ord){
    this.or=ord 
this.ordvar=!this.ordvar
  }
obj=[{
  uname:"scott",city:"hyd"
},{uname:"john",city:"sec"},
{uname:"amith",city:"rjy"},
{uname:"sumith",city:"vja"},
{
  uname:"ram",city:"hyd"
},{uname:"sam",city:"sec"},
{uname:"ramesh",city:"kkd"},
{uname:"suresh",city:"chennai"}]

}
