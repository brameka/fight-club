import { Component, Input, Output, EventEmitter, AfterViewInit, Inject } from '@angular/core';

@Component({
  selector: 'app-actions-bar',
  template: `
    <div class="app-actions-bar">
      <!--<button mat-raised-button color="primary" class="app-actions-bar__today">
        <mat-icon>favorite</mat-icon> TODAY
      </button>
      <button mat-icon-button color="primary">
        <mat-icon aria-label="Example icon-button with a heart icon">keyboard_arrow_left</mat-icon>
      </button>
      <button mat-icon-button color="primary">
        <mat-icon aria-label="Example icon-button with a heart icon">keyboard_arrow_right</mat-icon>
      </button>
      <button mat-icon-button color="primary" class="app-actions-bar__calendar-button">
        <mat-icon aria-label="Example icon-button with a heart icon">event</mat-icon>
      </button>
      <span class="app-actions-bar__title">{{text}}</span>-->

      <div class="spacer"></div>

      <!--<mat-button-toggle-group #group="matButtonToggleGroup">
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

      <button mat-icon-button>
        <mat-icon aria-label="Example icon-button with a heart icon">more_vert</mat-icon>
      </button>-->

      <button mat-raised-button color="primary" class="app-actions-bar__today">
        <mat-icon>add</mat-icon> NEW
      </button>

    </div>`,
  styleUrls: ['./calendar-actions.component.scss']
})

export class CalendarActionsComponent implements AfterViewInit {
  @Input() text: string;
  @Output() action: string;

  constructor() {}

  ngAfterViewInit(): void {}
}
