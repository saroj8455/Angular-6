import { Component, OnInit, Inject } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import {Http} from "@angular/http"
@Component({
  selector: 'app-displaymore',
  templateUrl: './displaymore.component.html',
  styleUrls: ['./displaymore.component.css']
})
export class DisplaymoreComponent implements OnInit {
pid;info
  constructor(@Inject (Http) public ht,@Inject (ActivatedRoute) public ar) {
    this.ar.params.subscribe(dt=>{
      this.pid=(dt["proid"])
      this.ht.post("getinfo",{pid:this.pid}).subscribe(dt=>{
        this.info=JSON.parse(dt._body)
      })
    })
   }

  ngOnInit() {
  }

}
