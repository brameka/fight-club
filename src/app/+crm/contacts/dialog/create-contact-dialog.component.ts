import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-create-contact-dialog',
  templateUrl: 'create-contact-dialog.component.html',
  styleUrls: ['./create-contact-dialog.component.scss']
})
export class CreateContactDialogComponent implements OnInit {
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

  constructor (
    public dialogRef: MatDialogRef<CreateContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder) {
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

  // payRate?: number;
  // payFrequency?: Frequency;
  // occupation?: string;
  // occupationDuration?: number;
  // previousEmployers?: string[];
  // height?: number;
  // weight?: number;
  // preferences?: {
  //   homeLoan?: {
  //     interestRate?: boolean;
  //     lumpSum?: boolean;
  //     flexibility?: boolean;
  //     notes?: string;
  //   };
  //   protection?: {
  //     lifeInsurance?: {
  //       amount?: number;
  //       premiums?: number;
  //       maturityDate?: string;
  //       insurer?: string;
  //     };
  //     incomeProtection?: {
  //       amount?: number;
  //       premiums?: number;
  //       insurer?: string;
  //     };
  //     traumaInsurance?: {
  //       amount?: number;
  //       premiums?: number;
  //       insurer?: string;
  //     }
  //   }
  // };



  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close();
  }

  ngOnInit () {}

}
