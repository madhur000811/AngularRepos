import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calDiscount'
})
export class CalDiscountPipe implements PipeTransform {

  transform(value: any, dis: number): unknown {
    return (dis * value) / 100;
  }

}
