import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'p1'
})
export class P1Pipe implements PipeTransform {

  transform(x) {
    var nstr=""
    for(var i=0;i<x.length;i++)
    {
      if(i%2==0)
      nstr+=x[i].toUpperCase()
      else
      nstr+=x[i]
    }
    return nstr
  }

}
