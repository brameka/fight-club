import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-create-client-dialog',
  templateUrl: 'create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateClientDialogComponent implements OnInit {
  state: any;

  constructor (public dialogRef: MatDialogRef<CreateClientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder) {

  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close();
  }

  ngOnInit () {}

}
