import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'p4'
})
export class P4Pipe implements PipeTransform {

  transform(str,sl,a2): any {
    var grd;
    if(sl<5000)
    grd="C Grade"
    else 
    if(sl>=5000 && sl<10000)
    grd="B Grade"
    else 
    if(sl>=10000)
    grd="A Grade"
    
    return a2+":"+str+"-"+grd;
  }

}
