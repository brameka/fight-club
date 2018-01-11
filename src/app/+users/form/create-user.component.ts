import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import * as actions from '../../state/users/users.actions';
import * as notifications from '../../state/notification/notification.actions';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements AfterViewInit, OnInit  {
  personalFormGroup: FormGroup;
  contactFormGroup: FormGroup;
  user: User;
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

  constructor(private formBuilder: FormBuilder, private store: Store<object>) { }

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
    this.contactFormGroup = this.formBuilder.group({
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
    this.user = {
      username: 'test',
      password: 'test',
      firstname: 'test',
      lastname: 'test',
    };
    this.store.dispatch(new actions.CreateUser(this.user));
  }
}
