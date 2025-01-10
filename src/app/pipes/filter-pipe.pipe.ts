import { Pipe, PipeTransform } from '@angular/core';
import { Expense } from '../models/expense';

@Pipe({
  name: 'filterPipe',
  standalone: false
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Expense[], filterText: string): Expense[] {
    filterText=filterText?filterText.toLocaleLowerCase():filterText
    return filterText?value.filter((e:Expense)=>e.description.toLocaleLowerCase().indexOf(filterText)!==-1):value
  }

}
