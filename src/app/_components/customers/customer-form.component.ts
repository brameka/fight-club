import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements AfterViewInit, OnInit  {
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

  constructor(private formBuilder: FormBuilder) {}

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
}
