import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-loans-dialog',
  templateUrl: 'loans-dialog.component.html'
})
export class LoansDialogComponent implements OnInit {
  state: any;

  constructor (public dialogRef: MatDialogRef<LoansDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder) {

  }

  ngOnInit () {}

}
