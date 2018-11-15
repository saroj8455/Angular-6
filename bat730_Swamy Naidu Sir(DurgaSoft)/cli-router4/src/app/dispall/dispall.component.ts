import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http"
import { Inject } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-dispall',
  templateUrl: './dispall.component.html',
  styleUrls: ['./dispall.component.css']
})
export class DispallComponent  {
  allpro;
  
constructor(@Inject (Http) public ht,@Inject (Router) public rt){
this.ht.get("getall").subscribe(dt=>{
  this.allpro=(JSON.parse(dt._body))
})
}
}
