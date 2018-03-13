import { Component, AfterViewInit, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as actions from 'app/+crm/state/clients/client.actions';
import * as notifications from 'app/state/notification/notification.actions';
import * as app from 'app/state/app/app.actions';

@Component({
  selector: 'app-fact-menu',
  templateUrl: './fact-menu.component.html',
  styleUrls: ['./fact-menu.component.scss']
})
export class FactMenuComponent implements AfterViewInit, OnInit  {
  
  constructor(private store: Store<Object>) { }

  ngOnInit() {
  }

  ngAfterViewInit() {}

  save() {}
}
