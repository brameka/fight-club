import { Component, AfterViewInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements AfterViewInit  {
    emailFormControl = new FormControl('', [
        Validators.required, Validators.pattern(EMAIL_REGEX)
    ]);

    firstNameControl = new FormControl('', [Validators.required]);
    lastNameControl = new FormControl('', [Validators.required]);
    addressControl = new FormControl('', [Validators.required]);
    suburbControl = new FormControl('', [Validators.required]);
    cityControl = new FormControl('', [Validators.required]);
    postcodeControl = new FormControl('', [Validators.required]);

    constructor() {}

    ngAfterViewInit() {
    }
}
