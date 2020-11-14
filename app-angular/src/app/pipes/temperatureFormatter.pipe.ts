import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'temperatureFormatter' })

export class TemperatureFormatter implements PipeTransform {

  transform(kelvin: number) {
    const grade: number = kelvin - 273.15;
    return Math.trunc(grade);
  }
}
