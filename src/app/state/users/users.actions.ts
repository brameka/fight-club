import { Action } from '@ngrx/store';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';

export const GET_USERS = '[Users] Get Users';
export const GET_USERS_SUCCESS = '[Users] Get Users Success';
export const CREATE_USER = '[Users] Create User';
export const CREATE_USER_SUCCESS = '[Users] Create User Success';

export class GetUsers implements Action {
  readonly type = GET_USERS;
  constructor(public payload: any) {}
}

export class GetUsersSuccess implements Action {
  readonly type = GET_USERS_SUCCESS;
  constructor(public payload: User[]) {}
}

export class CreateUser implements Action {
  readonly type = CREATE_USER;
  constructor(public payload: any) {}
}

export class CreateUserSuccess implements Action {
  readonly type = CREATE_USER_SUCCESS;
  constructor(public payload: any) {}
}

export type All
  = GetUsers
  | GetUsersSuccess
  | CreateUser
  | CreateUserSuccess;
