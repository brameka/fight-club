import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Asset, Liability, Income, Expense } from '../models/financial';
import { Frequency } from '../models/frequency';

@Injectable()
export class FinancialService {
  private asset: Asset = {
    name: 'Asset',
    description: 'Kiwisaver',
    value: 12000
  };

  private liability: Liability = {
    name: 'Liability',
    description: 'Personal Loan',
    value: 10000
  };

  private income: Income = {
    name: 'Income',
    description: 'Job',
    frequency: Frequency.Yearly,
    amount: 50000
  };

  private expense: Expense = {
    name: 'Expense',
    description: 'Rent',
    frequency: Frequency.Weekly,
    amount: 400
  };

  private assets$: Observable<Asset[]>;
  private expenses$: Observable<Expense[]>;
  private incomes$: Observable<Income[]>;
  private liabilities$: Observable<Liability[]>;

  constructor() {}

  getIncome(payload: any): Observable<Income[]> {
    const incomes = [];
    for (let i = 0; i < 3; i++) {
      incomes.push(this.income);
    }
    this.incomes$ = Observable.of(incomes);
    return this.incomes$;
  }

  getExpenses(payload: any): Observable<Expense[]> {
    const expenses = [];
    for (let i = 0; i < 3; i++) {
      expenses.push(this.expense);
    }
    this.expenses$ = Observable.of(expenses);
    return this.expenses$;
  }

  getAssets(payload: any): Observable<Asset[]> {
    const assets = [];
    for (let i = 0; i < 7; i++) {
      assets.push(this.asset);
    }
    this.assets$ = Observable.of(assets);
    return this.assets$;
  }

  getLiabilities(payload: any): Observable<Liability[]> {
    const liabilities = [];
    for (let i = 0; i < 4; i++) {
      liabilities.push(this.liability);
    }
    this.liabilities$ = Observable.of(liabilities);
    return this.liabilities$;
  }

}
