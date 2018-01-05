import { Action } from '@ngrx/store';
import { Loan } from '../../models/loan';
import { Observable } from 'rxjs/Observable';

export const GET_LOANS = '[Loan] Get Loans';
export const GET_LOANS_SUCCESS = '[Loan] Get Loans Success';

export class GetLoans implements Action {
  readonly type = GET_LOANS;
  constructor(public payload: any) {}
}

export class GetLoansSuccess implements Action {
  readonly type = GET_LOANS_SUCCESS;
  constructor(public payload: Loan[]) {}
}

export type All
  = GetLoans
  | GetLoansSuccess;
