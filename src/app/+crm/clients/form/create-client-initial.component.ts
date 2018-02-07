import { Component, AfterViewInit, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Client } from 'app/models/client';
import { Role } from 'app/models/role';
import * as actions from 'app/+crm/state/clients/client.actions';
import * as notifications from 'app/state/notification/notification.actions';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-create-client-initial',
  templateUrl: './create-client-initial.component.html',
  styleUrls: ['./create-client-initial.component.scss']
})
export class CreateClientInitialComponent implements AfterViewInit, OnInit  {
  @Output() close = new EventEmitter<any>();
  group: FormGroup;
  client: Client;


  constructor(
    private formBuilder: FormBuilder,
    private store: Store<object>,
    private service: SlimLoadingBarService
  ) { }

  ngOnInit() {
    this.group = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
  }

  cancel () {
    console.log('cancel initial');
    this.close.emit();
  }

  save() {
    this.client = {
      id: 'xxx',
      name: 'new client'
    };
    this.store.dispatch(new actions.CreateClient(this.client));
    this.close.emit();
  }
}
