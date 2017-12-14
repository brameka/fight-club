import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';

import { Customer } from '../models/customer';

@Injectable()
export class CustomerService {
  customers = ['test1', 'test2', 'test3', 'test4'];
  customers$: Observable<string>;
  customer$: Observable<Customer>;

    constructor() {}

    getCustomers(): Observable<string> {
      this.customers$ = Observable.from(this.customers);
      return this.customers$;
    }

    createCustomer(customer: Customer): Observable<Customer> {
      this.customer$ = Observable.create(observer => {
        observer.next(customer);
        observer.complete();
      });
      return this.customer$;
    }
}
