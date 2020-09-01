import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'searchPipe', pure: false})
export class SearchPipe implements PipeTransform {
  transform(value: any[], term: string): any[] {
    return value.filter((x: any) => x.title.label.toLowerCase().includes(term.toLowerCase()));

  }
}
