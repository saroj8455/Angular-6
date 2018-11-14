import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent implements OnInit {

  constructor() { }
   
  public deptObj:any=[
    {id:1,dept:"HR" },
    {id:2,dept:"Administrative"},
    {id:3,dept:"Finance"},
    {id:4,dept:"Management"}
  ];

  fun1():void{
    alert(this.deptObj);
  }
  
  
  ngOnInit() {
    console.log(this.deptObj);
  }

}
