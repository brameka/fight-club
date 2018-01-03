import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-loans-form',
  templateUrl: './loans-form.component.html',
  styleUrls: ['./loans-form.component.scss']
})
export class LoansFormComponent implements AfterViewInit, OnInit  {

  personalFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store<object>) { }

  ngOnInit() {
    this.personalFormGroup = this.formBuilder.group({
      surname: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
  }

  save() {
  }
}
