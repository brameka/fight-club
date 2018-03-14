import { Component, AfterViewInit, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as actions from 'app/+crm/state/clients/client.actions';
import * as notifications from 'app/state/notification/notification.actions';
import * as app from 'app/state/app/app.actions';

@Component({
  selector: 'app-fact-financials',
  templateUrl: './fact-financials.component.html',
  styleUrls: ['./fact-financials.component.scss']
})
export class FactFinancialsComponent implements AfterViewInit, OnInit  {

  constructor(private formBuilder: FormBuilder, private store: Store<Object>) { }

  ngOnInit() {
      this.store.dispatch(new app.ShowState({
        state: 'facts',
        title: 'Facts',
        top: '64px'
      }));
  }

  ngAfterViewInit() {}

  save() {}
}
