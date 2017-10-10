import { Component } from '@angular/core';

@Component({
  selector: 'app-day-calendar',
  templateUrl: './day-calendar.component.html',
  styleUrls: ['./day-calendar.component.scss']
})
export class DayCalendarComponent {
  hours: any[] = [];

  constructor () {
    for (let i = 0; i < 24; i++) {
        this.hours.push({hour: i});
    }
  }

}
