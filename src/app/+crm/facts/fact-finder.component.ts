import { Component, AfterViewInit, OnInit, Output, EventEmitter } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Client } from 'app/models/client';
import { Role } from 'app/models/role';
import * as actions from 'app/+crm/state/clients/client.actions';
import * as notifications from 'app/state/notification/notification.actions';
import * as app from 'app/state/app/app.actions';

@Component({
  selector: 'app-fact-finder',
  templateUrl: './fact-finder.component.html',
  styleUrls: ['./fact-finder.component.scss']
})
export class FactFinderComponent implements AfterViewInit, OnInit  {
  contactFormGroup: FormGroup;
  state = 0;

  constructor(private formBuilder: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute,
    private slim: SlimLoadingBarService,
    private store: Store<Object>) { }

  ngOnInit() {
      this.store.dispatch(new app.ShowState({
        state: 'facts',
        title: 'Facts',
        top: '64px'
      }));
  }

  changeState(index: number) {
    this.state = index;
  }

  ngAfterViewInit() {
    this.slim.complete();
  }

  navigateRoute(path: string) {
    this.router.navigate([path], { relativeTo: this.route });
  }

  save() {}
}
