import { Component, Input, Output, EventEmitter, AfterViewInit, Inject } from '@angular/core';

@Component({
  selector: 'app-calendar-bar',
  template: `
    <div class="app-calendar-bar">
      <!--<button mat-raised-button color="primary" class="app-calendar-bar__today">
        NEW
      </button>-->

      <button color="primary" mat-raised-button [matMenuTriggerFor]="menu">NEW</button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item>Item 1</button>
        <button mat-menu-item>Item 2</button>
      </mat-menu>

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
          <mat-icon>view_stream</mat-icon>
        </mat-button-toggle>
        <mat-button-toggle value="center">
          <mat-icon>view_week</mat-icon>
        </mat-button-toggle>
        <mat-button-toggle value="right">
          <mat-icon>view_module</mat-icon>
        </mat-button-toggle>
      </mat-button-toggle-group>

      <!--<button mat-icon-button>
        <mat-icon aria-label="Example icon-button with a heart icon">more_vert</mat-icon>
      </button>-->
      

    </div>`,
  styleUrls: ['./calendar-bar.component.scss']
})

export class CalendarBarComponent implements AfterViewInit {
  @Input() text: string;
  @Output() action: string;

  constructor() {}

  ngAfterViewInit(): void {}
}
