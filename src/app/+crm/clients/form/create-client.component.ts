import { Component, AfterViewInit, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Client } from 'app/models/client';
import { Role } from 'app/models/role';
import * as actions from 'app/+crm/state/clients/client.actions';
import * as notifications from 'app/state/notification/notification.actions';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements AfterViewInit, OnInit  {
  @Output() close = new EventEmitter<any>();
  group: FormGroup;
  client: Client;
  personalFormGroup: FormGroup;
  contactFormGroup: FormGroup;
  isLinear = false;

  roles: any[] = [
    'Adult',
    'Child',
    'Other',
    'Guarantor',
    'Policy Owner'
  ];

  titles: any[] = [
    'Mr',
    'Mrs',
    'Ms',
    'Miss',
    'Dr'
  ];

  genders: any[] = [ 'Male', 'Female' ];

  constructor(private formBuilder: FormBuilder, private store: Store<Object>) { }

  ngOnInit() {
    this.personalFormGroup = this.formBuilder.group({
      email: ['', [
        Validators.required, Validators.pattern(EMAIL_REGEX)
      ]],
      firstname: ['', Validators.required],
      middlename: [''],
      surname: ['', Validators.required],
      preferred: [''],
      gender: ['', Validators.required],
      role: [''],
      title: [''],
      dob: ['', Validators.required]
    });
    this.group = this.formBuilder.group({
      homePhone: ['', Validators.required],
      businessPhone: [''],
      mobilePhone: [''],
      time: [''],
      occupation: [''],
      company: ['']
    });
  }

  ngAfterViewInit() {
  }

  save() {
    this.client = {};
    this.store.dispatch(new actions.CreateClient(this.client));
  }
}
