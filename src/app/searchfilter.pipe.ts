import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any, input: string) {

    if (value) {
        input = input.toLowerCase();
        return value.filter(el => {
            return el.name.toLowerCase().indexOf(input) > -1;
        })
    }
    return value;
  }
}
