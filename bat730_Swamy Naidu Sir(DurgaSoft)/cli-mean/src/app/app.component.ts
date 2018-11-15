import { Component,Inject } from '@angular/core';
import  {Http} from "@angular/http"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject (Http) public ht){

  }
  ngOnInit(){
    this.funget()
  }
  tab_data
  funins(){
    var obj={uname:this.t1,city:this.t2}
    this.ht.post("insrec",obj).subscribe(dt=>{
      alert(dt._body)
      this.funget()
      this.t1=""
      this.t2=""
    })
  }
  t1;t2;t11;t22;oldobj
  funupdate(r){
    this.t11=r.uname
    this.t22=r.city
    this.oldobj={uname:r.uname}

  }
  fundel(un){
    this.ht.post("delrow",{uname:un}).subscribe(dt=>{
      alert(dt._body)
      this.funget()
    })
  }
  funmod(){
    var newobj={uname:this.t11,city:this.t22}
    var arr=[this.oldobj,newobj]
    this.ht.post("update",arr).subscribe(dt=>{
      alert(dt._body)
      this.funget()
    })
  }
  funget(){
    this.ht.get("getdata").subscribe(dt=>{
      this.tab_data=JSON.parse(dt._body)
    })
  }
  title = 'cli-mean';
}
