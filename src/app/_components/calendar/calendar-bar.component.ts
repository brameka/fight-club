import { Component, Input, Output, EventEmitter, AfterViewInit, Inject } from '@angular/core';

@Component({
  selector: 'app-calendar-bar',
  template: `
    <div class="app-calendar-bar">
      <button mat-raised-button color="primary" class="app-calendar-bar__today">Today</button>
      <button mat-icon-button color="primary">
        <mat-icon aria-label="Example icon-button with a heart icon">keyboard_arrow_left</mat-icon>
      </button>
      <button mat-icon-button color="primary">
        <mat-icon aria-label="Example icon-button with a heart icon">keyboard_arrow_right</mat-icon>
      </button>
      <button mat-icon-button color="primary" class="app-calendar-bar__calendar-button">
        <mat-icon aria-label="Example icon-button with a heart icon">event</mat-icon>
      </button>
      <span class="app-calendar-bar__title">{{text}}</span>

      <div class="spacer"></div>

      <mat-button-toggle-group #group="matButtonToggleGroup">
        <mat-button-toggle value="left">
          <mat-icon>format_align_left</mat-icon>
        </mat-button-toggle>
        <mat-button-toggle value="center">
          <mat-icon>format_align_center</mat-icon>
        </mat-button-toggle>
        <mat-button-toggle value="right">
          <mat-icon>format_align_right</mat-icon>
        </mat-button-toggle>
        <mat-button-toggle value="justify" disabled>
          <mat-icon>format_align_justify</mat-icon>
        </mat-button-toggle>
      </mat-button-toggle-group>

    </div>`,
  styleUrls: ['./calendar-bar.component.scss']
})

export class CalendarBarComponent implements AfterViewInit {
  @Input() text: string;
  @Output() action: string;

  constructor() {}

  ngAfterViewInit(): void {}
}
