import { Action } from '@ngrx/store';
import { Insurance } from '../../models/insurance';
import { Observable } from 'rxjs/Observable';

export const GET_FINANCIALS = '[Financial] Get Financials';
export const GET_FINANCIALS_SUCCESS = '[Financial] Get Financials Success';

export class GetFinancials implements Action {
  readonly type = GET_FINANCIALS;
  constructor(public payload: any) {}
}

export class GetFinancialsSuccess implements Action {
  readonly type = GET_FINANCIALS_SUCCESS;
  constructor(public payload: any) {}
}

export type All
  = GetFinancials
  | GetFinancialsSuccess;
