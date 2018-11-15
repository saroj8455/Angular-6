import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tmp=false;d1="";tt
  funx(){
    if(this.tt.length<5)
    this.tmp=true
    else
    this.tmp=false;
  }
  funregis(fmref){
    if(fmref.valid==true)
    {
      alert("Valid")
    }
    else
    alert("Invalid")
  }
  title = 'cli-templatedriven';
}