import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'braket'
})
export class BraketPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {

    console.log(value, args)
    if (args[0]) {
      return args[0] + ' ' + value
    } else {
      return 'Miss' + ' ' + value;
    }

  }

}