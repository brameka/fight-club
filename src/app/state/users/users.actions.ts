import { Action } from '@ngrx/store';
import { Loan } from '../../models/loan';
import { Observable } from 'rxjs/Observable';

export const GET_USERS = '[Users] Get Users';
export const GET_USERS_SUCCESS = '[Users] Get Users Success';

export class GetUsers implements Action {
  readonly type = GET_USERS;
  constructor(public payload: any) {}
}

export class GetUsersSuccess implements Action {
  readonly type = GET_USERS_SUCCESS;
  constructor(public payload: Loan[]) {}
}

export type All
  = GetUsers
  | GetUsersSuccess;
