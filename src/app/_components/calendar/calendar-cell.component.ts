import { Component, Input, Output, EventEmitter, AfterViewInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-calendar-cell',
  template: `
    <div class='app-calendar-cell' (click)="cellClicked()"><ng-content></ng-content></div>`,
  styleUrls: ['./calendar-cell.component.scss']
})

export class CalendarCellComponent implements AfterViewInit {

  @Input() date: string;
  @Input() minutes: number;
  @Input() boundries: any;
  @Output() clicked = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  cellClicked() {
    const data = {
      date: this.date,
      minutes: this.minutes
    };
    this.clicked.emit(data);
  }

  ngAfterViewInit() {
  }

}
