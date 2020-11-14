import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'nameOfDay' })

export class NameOfDayPipe implements PipeTransform {

  days = [
    { number : 0, day : 'Monday' },
    { number : 1, day : 'Tuesday' },
    { number : 2, day : 'Wednesday' },
    { number : 3, day : 'Thursday' },
    { number : 4, day : 'Friday' },
    { number : 5, day : 'Saturday' },
    { number : 6, day : 'Sunday' }
  ]

  transform(number: number) {
    const name = this.days.find(item => item.number === number);
    return name?.day
  }
}
