import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-create-users-dialog',
  templateUrl: 'create-users-dialog.component.html',
  styleUrls: ['./create-users-dialog.component.scss']
})
export class CreateUsersDialogComponent implements OnInit {
  state: any;

  constructor (public dialogRef: MatDialogRef<CreateUsersDialogComponent>,
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
