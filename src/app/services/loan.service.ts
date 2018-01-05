import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Loan } from '../models/loan';

@Injectable()
export class LoanService {
  private loan: Loan = {
    name: 'Mortgage',
  };
  private loans$: Observable<Loan[]>;
  private loan$: Observable<Loan>;

  constructor() {}

  getLoans(payload: any): Observable<Loan[]> {
    const loans = [];
    for (let i = 0; i < 3; i++) {
      loans.push(this.loan);
    }
    this.loans$ = Observable.of(loans);
    return this.loans$;
  }

  getLoan(id: string): Observable<Loan> {
    this.loan$ = Observable.of(this.loan);
    return this.loan$;
  }
}
