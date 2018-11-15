import { Directive } from '@angular/core';
import {ElementRef,HostListener,Renderer2} from "@angular/core"

@Directive({
  selector: 'appD1'
})
export class D1Directive {

 constructor(public el:ElementRef,public rn:Renderer2) { 
   this.el.nativeElement.style.color="Red"
 }
 @HostListener("mouseover") onmouseover(){
 //this.rn.setStyle(this.el.nativeElement,"display","none")
 this.rn.addClass(this.el.nativeElement,"abc")
 }
 @HostListener("mouseout") onmouseout(){
  this.rn.removeClass(this.el.nativeElement,"abc")
this.rn.setAttribute(this.el.nativeElement,"width",500)
 }
}
