import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Contact } from 'app/models/contact';
import { Role } from 'app/models/role';
import * as actions from 'app/+crm/state/contacts/contact.actions';
import * as notifications from 'app/state/notification/notification.actions';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-create-contact-form',
  templateUrl: './create-contact-form.component.html',
  styleUrls: ['./create-contact-form.component.scss']
})
export class CreateContactFormComponent implements AfterViewInit, OnInit  {
  personalFormGroup: FormGroup;
  contactFormGroup: FormGroup;
  contact: Contact;
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
    this.contact = {
      name: 'test',
      firstname: 'test',
      lastname: 'test',
      mobile: '0456569896',
      homePhone: '0456569896',
      workPhone: '0456569896',
      email: 'bronson.rameka@gmail.com',
      role: Role.Adult
    };

    // this.store.dispatch(new actions.CreateContact(this.contact));
  }
}
