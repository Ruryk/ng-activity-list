import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysDifference',
  standalone: true
})
export class DaysDifferencePipe implements PipeTransform {

  transform(value: string | number | Date): string {
    if (!value) {
      return '0d';
    }

    const currentDate = new Date();
    const inputDate = new Date(value);

    if (isNaN(inputDate.getTime())) {
      console.error('Invalid date format');
      return '0d';
    }

    const timeDifference = inputDate.getTime() - currentDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return `${ daysDifference }d`;
  }
}
