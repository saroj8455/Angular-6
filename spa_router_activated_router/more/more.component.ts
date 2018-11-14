import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
//step-5 
  //create a route object ----1
  constructor(private route:ActivatedRoute) { }
//store the request id into id variable
public id:number=0;

//call the HttpClient

//store the compare result of object
public newDeptObj:any={};

// temporary object ///same as database object ----2
public deptObj:any=[
  {id:1,dept:"HR" },
  {id:2,dept:"Administrative"},
  {id:3,dept:"Finance"},
  {id:4,dept:"Management"}
];


  ngOnInit() {
    //access the route Injectable object here ----3
    this.route.params.subscribe(req_parms=>{
      this.id=parseInt(req_parms.id);
      //id receive successfully
      //console.log(this.id);
      
    //compare the object_id and request id and display the related inforamtion --4
    this.newDeptObj=this.deptObj.find(x=>x.id==this.id)
    console.log(this.newDeptObj);


    })

  }

}
