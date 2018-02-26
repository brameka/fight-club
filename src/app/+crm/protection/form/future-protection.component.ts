import { Component, AfterViewInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-future-protection',
  templateUrl: 'future-protection.component.html',
  styleUrls: ['./future-protection.component.scss']
})
export class FutureProtectionComponent implements AfterViewInit {  
  state: any;
  incomeGroup: FormGroup;
  expensesGroup: FormGroup;
  assetsGroup: FormGroup;
  liabilitiesGroup: FormGroup;
  index: number = 0;
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

}
