import { Injectable,EventEmitter } from '@angular/core';
import {cls1} from "./test"
@Injectable({
  providedIn: 'root'
})
export class S1Service {
  myevent:EventEmitter<cls1>=new EventEmitter()
}
