import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ui-date-time-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="date-time-picker">
      <mat-form-field class="date-time-picker__date-input">
        <input [placeholder]="placeholder" [matDatepicker]="picker" readonly matInput>
        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      </mat-form-field>
      <mat-datepicker #picker (selectedChanged)="selectDate($event)"></mat-datepicker>
      <span class="date-time-picker__bridge">at</span>
      <mat-form-field class="date-time-picker__time-input">
        <input placeholder="hh:mm" (blur)="updateSelectedTime($event)" matInput>
      </mat-form-field>
    </div>
  `
})
export class UiDateTimePickerComponent {
  @Input() placeholder = 'Choose date';

  selectDate (date: string) {
    console.log(date);
  }

  updateSelectedDate (date: string) {
    console.log(date);
  }

  updateSelectedTime (time: string) {
    console.log(time);
  }
}
