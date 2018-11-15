import { Directive,ElementRef,HostListener, Host } from '@angular/core';

@Directive({
  selector: '[appD3]'
})
export class D3Directive {

  constructor(public ele:ElementRef) {
    this.ele.nativeElement.style.border="1px solid silver"
    this.ele.nativeElement.style.padding="7px"
    this.ele.nativeElement.style.borderRadius="3px"
    this.ele.nativeElement.style.width="300px"
    

   }
   @HostListener('focus') onfocus(){
    this.ele.nativeElement.style.borderColor="blue"
    this.ele.nativeElement.style.boxShadow="0px 0px 5px blue"
  }
  @HostListener("blur") onblur(){
    this.ele.nativeElement.style.borderColor="silver"
    this.ele.nativeElement.style.boxShadow="none"

  }

}
