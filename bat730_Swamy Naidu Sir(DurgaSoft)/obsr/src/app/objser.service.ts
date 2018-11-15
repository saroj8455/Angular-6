import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs"
import { ThrowStmt } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ObjserService {
obj;currentmessage
  constructor() { 
    this.obj=new BehaviorSubject("1")
    this.currentmessage=this.obj.asObservable()
  }
  changeMessage(msg){
this.obj.next(msg)
  }
}
