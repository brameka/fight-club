import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../../models/customer';
import * as actions from '../../state/customer/customer.actions';
import * as notifications from '../../state/notification/notification.actions';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements AfterViewInit, OnInit  {
  personalFormGroup: FormGroup;
  contactFormGroup: FormGroup;
  customer: Customer;
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

  constructor(private formBuilder: FormBuilder, private store: Store<object>) {}

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
    this.customer = {
      firstname: 'test',
      lastname: 'test',
      mobile: '0456569896',
      email: 'bronson.rameka@gmail.com'
    };
    // this.store.dispatch(new actions.CreateCustomer(this.customer));
    this.store.dispatch(new notifications.ShowNotification({
      message: 'hello',
      type: 'success'
    }));
  }
}
