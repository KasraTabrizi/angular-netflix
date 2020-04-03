import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTime'
})
export class MyTimePipe implements PipeTransform {

  transform(value: number): String {
    let hour = 0;
    let time = 0;
    let minutes = 0;

    time = value / 60;
    hour = Math.floor(time);
    minutes = Math.round((time - hour) * 60);

    return String(hour) + "h " + String(minutes) + "m";
  }
}
