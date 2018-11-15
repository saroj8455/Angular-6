import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import { Inject } from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(@Inject (ActivatedRoute) public ar) { }

  ngOnInit() {
    this.ar.params.subscribe(dt=>{
      alert(dt["id"])
      alert(dt['uname'])
    })
  }

}
