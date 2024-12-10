import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByTimestamp',
  standalone: true
})
export class SortByTimestampPipe implements PipeTransform {
  transform<T>(array: T[] | null, key: keyof T): T[] {
    if (array === null || !Array.isArray(array) || !key) {
      return array || [];
    }

    return [...array].sort((a, b) => {
      const prevItemDate = new Date(a[key] as number).getTime();
      const nextItemDate = new Date(b[key] as number).getTime();
      return prevItemDate - nextItemDate;
    });
  }

}
