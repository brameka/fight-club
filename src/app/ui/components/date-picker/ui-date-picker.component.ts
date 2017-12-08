import { Component, ChangeDetectionStrategy, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material';
import * as moment from 'moment';
const dateFormat = 'YYYY-MM-DD';

export class DateValidator {
  static validDate(control: FormControl): any {
    const valid = moment(control.value, dateFormat, true).isValid();
    if (valid) {
      // TODO: check if date before today?
      return null;
    } else {
      return {
        validDate: false
      };
    }
  }
}

@Component({
  selector: 'app-date-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ui-date-picker.component.html'
})
export class UiDatePickerComponent implements OnInit {
  dateControl: FormControl;
  @Input() placeholder: string;
  @Input() date: string;
  @Input() dateFilter: Function;
  @Output() dateChange: EventEmitter<string> = new EventEmitter();
  @Output() datePicked: EventEmitter<string> = new EventEmitter();
  validDateString = true;

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('sv-se');
  }

  get dateValid() {
    const valid = this.dateControl.status !== 'INVALID' && this.validDateString;
    return valid;
  }

  get dateInRange() {
    return this.dateControl.errors && this.dateControl.errors.mdDatepickerFilter !== true;
  }

  ngOnInit() {
    const date = this.date === null ? new Date('') : new Date(this.date);
    this.dateControl = new FormControl(date, Validators.compose([DateValidator.validDate]));
  }

  inputChanged(evt: any) {
    // TODO: force complete date format, material2 accepts '1' as a valid date (also debounce?)
    this.validDateString = true;
    const value = evt.target.value;

    if (value.length < 6) {
      this.validDateString = false;
      return;
    }

    const date = new Date(value);
    const shortDate = moment(date).format(dateFormat);
    if (moment(date, dateFormat, true).isValid()) {
      this.dateChange.emit(shortDate);
    }
  }

  selectedChanged(date: string) {
    const dateString = moment(date).format(dateFormat);
    this.datePicked.emit(dateString);
  }
}
