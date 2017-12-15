import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-day-calendar',
  templateUrl: './day-calendar.component.html',
  styleUrls: ['./day-calendar.component.scss']
})
export class DayCalendarComponent implements AfterViewChecked {

  @ViewChild('grid') grid: ElementRef;

  hours: any[] = [];

  boundries: any;

  constructor () {
    for (let i = 0; i < 24; i++) {
        this.hours.push({hour: i});
    }
  }

  ngAfterViewChecked() {
    //  height: `${event.rectangle.height}px`
    this.boundries = {
      height: this.grid.nativeElement.clientHeight,
      width: this.grid.nativeElement.clientWidth
    };
  }

  cellClicked(event) {
    console.log('add new block');
  }

}
