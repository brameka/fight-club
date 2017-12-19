import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';

import { Customer, CustomerResponse } from '../models/customer';

@Injectable()
export class CustomerService {
  customers = ['test1', 'test2', 'test3', 'test4'];
  customers$: Observable<string>;
  customer$: Observable<CustomerResponse>;

    constructor() {}

    getCustomers(): Observable<string> {
      this.customers$ = Observable.from(this.customers);
      return this.customers$;
    }

    createCustomer(customer: Customer): Observable<CustomerResponse> {
      this.customer$ = Observable.create(observer => {
        const response: CustomerResponse = {
          id: '12345'
        };
        observer.next(response);
        observer.complete();
      });
      return this.customer$;
    }
}
