import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-income-dialog',
  templateUrl: 'income-dialog.component.html',
  styleUrls: ['./income-dialog.component.scss']
})
export class IncomeDialogComponent implements OnInit {
  state: any;
  group: FormGroup;

  constructor (public dialogRef: MatDialogRef<IncomeDialogComponent>,
    private formBuilder: FormBuilder) {

    this.group = this.formBuilder.group({
      homePhone: ['', Validators.required],
      businessPhone: [''],
      mobilePhone: [''],
      time: [''],
      occupation: [''],
      company: ['']
    });

  }

//   cancel() {
//     this.dialogRef.close();
//   }

//   save() {
//     this.dialogRef.close();
//   }

  ngOnInit () {}

}
