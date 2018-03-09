import { Component, Inject, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-protection-dialog',
  templateUrl: 'create-protection-dialog.component.html',
  styleUrls: ['./create-protection-dialog.component.scss']
})
export class CreateProtectionDialogComponent implements OnInit, AfterViewInit {
  state: any;
  group: FormGroup;

  constructor (public dialogRef: MatDialogRef<CreateProtectionDialogComponent>,
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

  ngAfterViewInit() {
  }

  open() {
  }

}
