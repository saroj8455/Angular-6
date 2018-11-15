import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: 'appDirect1'
})
export class Direct1Directive {

  constructor(private el:ElementRef) {
    this.el.nativeElement.style.color="red"
    this.el.nativeElement.style.backgroundColor="silver"
    this.el.nativeElement.style.padding="2px"
    this.el.nativeElement.style.borderRadius="3px"
    this.el.nativeElement.style.cursor="pointer"
   }
   @HostListener('mouseover') onmouseover(){
     this.el.nativeElement.style.backgroundColor="lightblue"
     console.log(this.el.nativeElement)
   }

}
