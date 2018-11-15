import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appDire2]'
})
export class Dire2Directive {

  constructor(public el:ElementRef) { 
    this.el.nativeElement.style.color="green"
  }

}
