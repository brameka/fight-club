import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-customer-create-dialog-component',
  templateUrl: 'customer-create-dialog-component.html'
})
export class CustomerCreateDialogComponent implements OnInit {
  // loading$: Observable<boolean> = this.store.select(selectTagsLoading);
  // closeDialog$: Observable<boolean> = this.store.select(selectIsCloseDialog);
  types: any[] = [
    'Manual',
    'System'
  ];

  constructor (public dialogRef: MatDialogRef<CustomerCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
     private store: Store<any>) {}

  ngOnInit () {}

}
