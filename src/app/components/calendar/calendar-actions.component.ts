import { Component, Input, Output, EventEmitter, AfterViewInit, Inject } from '@angular/core';

@Component({
  selector: 'app-actions-bar',
  template: `
    <div class="app-actions-bar">
      <button [matMenuTriggerFor]="schedMenu" mat-button class="schedule-title">
        <mat-icon class="indicator">lens</mat-icon>
        Dr. Schnoz <mat-icon>keyboard_arrow_down</mat-icon>
      </button>
      <mat-menu #schedMenu="matMenu">
        <button mat-menu-item class="important-menu-item"><mat-icon>dashboard</mat-icon> All</button>
        <button mat-menu-item><mat-icon class="indicator">lens</mat-icon> Arabicsxxx</button>
        <button mat-menu-item><mat-icon class="indicator">lens</mat-icon> Australia</button>
        <button mat-menu-item><mat-icon class="indicator">lens</mat-icon> Angola</button>
        <button mat-menu-item><mat-icon class="indicator">lens</mat-icon> Bermuda</button>
        <button mat-menu-item><mat-icon class="indicator">lens</mat-icon> Brazil</button>
      </mat-menu>

      <div class="separator"></div>

      <button mat-icon-button color="primary">
        <mat-icon aria-label="Example icon-button with a heart icon">keyboard_arrow_left</mat-icon>
      </button>
      <button mat-icon-button color="primary">
        <mat-icon aria-label="Example icon-button with a heart icon">keyboard_arrow_right</mat-icon>
      </button>
      <button mat-icon-button color="primary" class="app-actions-bar__calendar-button">
        <mat-icon>event</mat-icon>
      </button>
      <span class="app-actions-bar__title">{{text}}</span>

      <div class="separator"></div>

      <span class="app-actions-bar__status">Active</span>
      <!--<button class="event-selector" mat-button color="primary" [matMenuTriggerFor]="statusMenu">
        <mat-icon class="indicator">lens</mat-icon>
        Active
      </button>
      <mat-menu #statusMenu="matMenu">
        <button mat-menu-item>Default</button>
        <button mat-menu-item>Appointment</button>
      </mat-menu>-->

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

      <!--<button class="event-selector" mat-button color="primary" [matMenuTriggerFor]="menu">
        <mat-icon><i class="material-icons">event_available</i></mat-icon>
        Appointment
      </button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item>Default</button>
        <button mat-menu-item>Appointment</button>
      </mat-menu>-->

      <button color="primary" mat-raised-button>NEW <mat-icon>add</mat-icon></button>

      <button mat-icon-button color="primary" [matMenuTriggerFor]="settings">
        <mat-icon aria-label="Example icon-button with a heart icon">more_vert</mat-icon>
      </button>
      <mat-menu #settings="matMenu">
        <button mat-menu-item><mat-icon>create</mat-icon> Create Booking</button>
        <button mat-menu-item><mat-icon>event</mat-icon> Add Schedule</button>
        <button mat-menu-item><mat-icon>content_copy</mat-icon> Copy Week</button>
        <button mat-menu-item><mat-icon>clear</mat-icon> Clear Schedule</button>
      </mat-menu>

    </div>`,
  styleUrls: ['./calendar-actions.component.scss']
})

export class CalendarActionsComponent implements AfterViewInit {
  @Input() text: string;
  @Output() action: string;

  constructor() {}

  ngAfterViewInit(): void {}
}
