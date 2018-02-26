import { Component, Inject, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-liability-dialog',
  templateUrl: 'liability-dialog.component.html',
  styleUrls: ['./liability-dialog.component.scss']
})
export class LiabilityDialogComponent implements OnInit, AfterViewInit {
  state: any;
  group: FormGroup;

  constructor (public dialogRef: MatDialogRef<LiabilityDialogComponent>,
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

  ngOnInit () {}

  ngAfterViewInit() {
  }

  open() {
  }

}
