import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { UiDatePickerComponent } from './ui-date-picker.component';

describe('UiDatePickerComponent', () => {
  let component: UiDatePickerComponent;
  let fixture: ComponentFixture<UiDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        BrowserModule,
        MatDatepickerModule,
        MatNativeDateModule,
        NoopAnimationsModule
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [UiDatePickerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiDatePickerComponent);
    component = fixture.componentInstance;

    component.date = '2017-05-19';

    fixture.detectChanges();
  });

  it('should render <ui-datepicker>', () => {
    expect(component).toBeTruthy();
  });
});
