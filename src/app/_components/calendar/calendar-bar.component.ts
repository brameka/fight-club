import { Component, Input, Output, EventEmitter, AfterViewInit, Inject } from '@angular/core';

@Component({
  selector: 'app-calendar-bar',
  template: `
    <div class="app-calendar-bar">
      <div class="app-calendar-block__inner">
      </div>
    </div>`,
  styleUrls: ['./calendar-block.component.scss']
})

export class CalendarBarComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit(): void {}
}
