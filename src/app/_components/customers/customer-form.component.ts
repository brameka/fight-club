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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.personalFormGroup = this.formBuilder.group({
      emailFormControl: ['', [
        Validators.required, Validators.pattern(EMAIL_REGEX)
      ]],
      firstNameControl: ['', Validators.required],
      lastNameControl: ['', Validators.required],
      addressControl: ['', Validators.required],
      suburbControl: ['', Validators.required],
      cityControl: ['', Validators.required],
      postcodeControl: ['', Validators.required]
    });
    this.contactFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
  }
}
