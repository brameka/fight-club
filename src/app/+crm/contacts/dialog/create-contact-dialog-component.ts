import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-contact-create-dialog-component',
  templateUrl: 'create-contact-dialog-component.html'
})
export class CreateContactDialogComponent implements OnInit {
  // loading$: Observable<boolean> = this.store.select(selectTagsLoading);
  // closeDialog$: Observable<boolean> = this.store.select(selectIsCloseDialog);
  state: any;

  constructor (public dialogRef: MatDialogRef<CreateContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder) {

  }

  ngOnInit () {}

}
