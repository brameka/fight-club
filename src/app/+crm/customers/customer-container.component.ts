import { Component, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from 'app/models/customer';
import { Observable } from 'rxjs/Observable';
import { CustomerCreateDialogComponent } from './customer-create-dialog-component';
import { CustomerState } from '../state/customer/customer.reducer';
import { Router, ActivatedRoute } from '@angular/router';

import * as actions from '../state/customer/customer.actions';
import * as app from 'app/state/app/app.actions';


import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  template: `
    <router-outlet></router-outlet>
  `
})
export class CustomerContainerComponent implements AfterViewInit {
  index: 0;
  state$: Observable<any>;
  subscription$: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<any>) {
      this.store.dispatch(new app.ShowContactState());
      this.state$ = this.store.select(state => state);
      this.subscription$ = this.state$.subscribe((x) => {
        const tabIndex = x.customer.index;
        const isRouting = x.customer.routing;
        if (tabIndex !== this.index && isRouting) {
          this.index = tabIndex;
          this.navigateToRoute(this.index);
        }
      });
  }

  ngAfterViewInit () {
    // this.store.dispatch(new app.ShowContactState());
  }

  navigateToRoute (index: number) {
    const route = this.getRouteFromIndex(index);
    this.router.navigate(['./' + route], { relativeTo: this.route });
  }

  getRouteFromIndex (index: number): string {
    switch (index) {
      case 0:
        return '';
      case 1:
        return 'clients';
      case 2:
        return 'loans';
      case 3:
        return 'insurance';
      case 4:
        return 'financials';
      case 5:
        return 'workflows';
      case 6:
        return 'records';
    }
  }

}