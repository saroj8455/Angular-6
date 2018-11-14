import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  public isValid(uid:string,pwd:string):any{
    var x:string="";
    if(uid=="admin" && pwd=="admin123"){

      x="welcome to admin";
      
    }
    else{
      x="invalid user id";
    }
    return x;

  }
  constructor() { }
}
