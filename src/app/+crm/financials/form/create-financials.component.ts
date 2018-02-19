import { Component, AfterViewInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-create-financials',
  templateUrl: 'create-financials.component.html',
  styleUrls: ['./create-financials.component.scss']
})
export class CreateFinancialsComponent implements AfterViewInit {
  state: any;
  group: FormGroup;

  roles: any[] = [
    'Adult',
    'Child',
    'Other',
    'Guarantor',
    'Policy Owner'
  ];

  frequency: any[] = [
    'Weekly',
    'Fortnightly',
    'Monthly',
    'Yearly'
  ];

  genders: any[] = [ 'Male', 'Female' ];

  constructor (private formBuilder: FormBuilder, private slim: SlimLoadingBarService) {
    this.group = this.formBuilder.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      country: ['', Validators.required],
      homeNumber: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      smoker: [false],
      employer: [''],
      payRate: [''],
      payFrequency: ['Weekly']
    });
  }

  ngAfterViewInit() {
    this.slim.complete();
  }


}
