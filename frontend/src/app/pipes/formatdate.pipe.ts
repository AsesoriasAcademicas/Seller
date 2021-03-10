import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatdate'
})
export class FormatdatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var datePipe = new DatePipe("en-US");
    value = datePipe.transform(value, args);
    return value;
  }

}
