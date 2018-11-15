import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'p2'
})
export class P2Pipe implements PipeTransform {

  transform(xy) {
    var str=""
    str+=xy[0]+xy[1]+xy[2]+"..."
    return str;
  }

}
