import { Component, AfterViewInit, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as actions from 'app/+crm/state/clients/client.actions';
import * as notifications from 'app/state/notification/notification.actions';
import * as app from 'app/state/app/app.actions';

@Component({
  selector: 'app-fact-contacts',
  templateUrl: './fact-contacts.component.html',
  styleUrls: ['./fact-contacts.component.scss']
})
export class FactContactsComponent implements AfterViewInit, OnInit  {
  contactFormGroup: FormGroup;
  state = 0;

  constructor(private formBuilder: FormBuilder, private store: Store<Object>) { }

  ngOnInit() {
  }

  ngAfterViewInit() {}

  save() {}
}
