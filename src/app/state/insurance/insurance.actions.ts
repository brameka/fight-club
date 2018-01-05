import { Action } from '@ngrx/store';
import { Insurance } from '../../models/insurance';
import { Observable } from 'rxjs/Observable';

export const GET_INSURANCES = '[Insurance] Get Insurances';
export const GET_INSURANCES_SUCCESS = '[Insurance] Get Insurances Success';

export class GetInsurances implements Action {
  readonly type = GET_INSURANCES;
  constructor(public payload: any) {}
}

export class GetInsurancesSuccess implements Action {
  readonly type = GET_INSURANCES_SUCCESS;
  constructor(public payload: Insurance[]) {}
}

export type All
  = GetInsurances
  | GetInsurancesSuccess;
