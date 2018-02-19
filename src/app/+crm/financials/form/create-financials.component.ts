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
  incomeGroup: FormGroup;
  expensesGroup: FormGroup;
  assetsGroup: FormGroup;
  liabilitiesGroup: FormGroup;
  index: number = 0;
  banks: any = [];

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
    
    this.incomeGroup = this.formBuilder.group({
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

    this.expensesGroup = this.formBuilder.group({
      name: ['', Validators.required]
    });

  }

  ngAfterViewInit() {
    this.slim.complete();
  }

  tabChanged(event: any) {
    this.index = event;
  }

  addBank() {
    this.banks.push({});
  }

}
