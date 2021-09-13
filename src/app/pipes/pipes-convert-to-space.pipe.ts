import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipesConvertToSpace'
})
export class PipesConvertToSpacePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
