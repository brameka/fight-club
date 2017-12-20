import { Component, AfterViewInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../../models/customer';
import * as actions from '../../state/customer/customer.actions';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

interface AppState {
  customer: Customer;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements AfterViewInit  {
  id: string;
  customer$: Observable<Customer>;
  state$: Observable<any>;
  routeSubscription: any;

  mode: 'static'|'edit'|'insurance' = 'static';

  contact: any = {
      id: 3,
      name: 'Colin Farrell'
  };

  constructor(
      private slimService: SlimLoadingBarService,
      private route: ActivatedRoute,
      private store: Store<Object>,
      private router: Router) {
        this.state$ = this.store.select(state => state);
        this.routeSubscription = this.route.params.subscribe(params => {
          this.id = params['id']; // (+) converts string 'id' to a number
          this.getCustomer(this.id);
       });
  }

  getCustomer (id: string) {
    this.store.dispatch(new actions.GetCustomer({id: this.id}));
  }

  ngAfterViewInit() {
      this.slimService.complete();
  }

  status() {
      if (this.mode === 'static') {
          this.mode = 'edit';
      } else {
          this.mode = 'static';
      }
  }

  update() {
      this.router.navigate(['/customers/1/insurance']);
  }
}
