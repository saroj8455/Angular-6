import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { parse } from 'url';
import { stringify } from '@angular/core/src/render3/util';

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

public align:string="";
//HttpClient demo through json server
//inject http client
constructor(private httpObject:HttpClient){}
public s1:string="";
public s2:string="";
public s3:string="";
public ar:[]=[];

fun1(){
  //console.log("hy")
 let url:string="http://localhost:3000/dept";
 //let url:string="http://localhost/angular.php";
  this.httpObject.get(url).subscribe((data:any)=>{
    //data successfully get from json server here (data:any) arrow function parameter
    console.log(data);
    //alert(this.ar=data) //display as a object    
   //alert(JSON.stringify(data)); //convert object data to string format 
    //this.empdata=JSON.stringify(data);
    this.ar=data;
  
    
   
  })
}

//add data  (id,name,loc) json properties
fun2(){
  let url="http://localhost:3000/dept";
  let deptObj:any={};
  //assign client data to deptObj
  deptObj.id=this.s1;
  deptObj.name=this.s2;
  deptObj.loc=this.s3;
  //console.log(deptObj);
  //post data to json-server 
  this.httpObject.post(url,deptObj).subscribe((data:any)=>{
    console.log("data add successfully");
    this.fun1(); //display after add the data 
    

  })
  
}

//delete 
fun3(id:number){
  //alert(id);
  let url="http://localhost:3000/dept/"+id;

  this.httpObject.delete(url).subscribe((data:any)=>{
    console.log("item delete successfully");
    this.fun1();
    
  })
}




}

class Student{
  public sname:string=""
  public course:string=""
}
