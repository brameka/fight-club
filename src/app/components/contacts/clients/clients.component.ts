import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clientscomponent.scss']
})
export class ClientsComponent {

  constructor(private store: Store<Object>) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  save() {
  }

}
