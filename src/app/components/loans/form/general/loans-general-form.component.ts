import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-loans-general-form',
  templateUrl: './loans-general-form.component.html',
  styleUrls: ['./loans-general-form.component.scss']
})
export class LoansGeneralFormComponent implements AfterViewInit, OnInit  {
  generalFormGroup: FormGroup;

  statuses: any[] = [
    'Conditional Approval',
    'Construction Loan - Progressive Drawdown',
    'Pre-Approved',
    'Settled',
    'Unconditional Approval',
    'Cancelled',
    'Declined',
    'Discharged',
    'Loan Repaid',
    'Lost to Other Lender/Competitor',
    'Not Proceeded With',
    'On Hold'
  ];

  constructor(private formBuilder: FormBuilder, private store: Store<object>) { }

  ngOnInit() {
    this.generalFormGroup = this.formBuilder.group({
      lender: ['', Validators.required],
      reference: ['', Validators.required],
      status: ['', Validators.required],
      settlementDate: ['', Validators.required],
      financeDate: ['', Validators.required],
      approvalDate: ['', Validators.required],
    });
  }

  ngAfterViewInit() {
  }

  save() {}
}
