import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

//import {HttpClientModule} from '@angular/common/http'; this line to app.module.ts 
//Ortherwise you can't access HttpClient 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //store the response 
  public arr:any[]=[];

  //store the response comming from 
  public arr2:any[]=[];

  //create HttpClient class instance/object
  constructor(private httpObj:HttpClient){}

  public fun1(){
  //  alert("hy")
  // https://www.w3schools.com/angular/customers.php
    let url:string="https://www.w3schools.com/angular/customers.php";

 

    //create rest api
    this.httpObj.get(url).subscribe((res:any)=>{
      //log response in console
     // console.log(res.records);
     this.arr=res.records;
     console.log(this.arr)
    },err=>{
      console.log(err);
    })

  }

  public fun2(){

     // https://reqres.in/api/login
     let url2:string="https://reqres.in/api/login";

     //rest api 2
     this.httpObj.get(url2).subscribe((response)=>{
      //successfully log the response the data in console
     // console.log(res.data)
     this.arr2=response.data;
      
     }),err=>{
       console.log(err);
     }
  }



}//close AppComponent class 
