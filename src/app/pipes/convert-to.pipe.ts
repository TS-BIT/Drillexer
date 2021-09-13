import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTo'
})
export class ConvertToPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
