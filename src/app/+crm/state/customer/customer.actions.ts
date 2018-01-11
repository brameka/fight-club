import { Action } from '@ngrx/store';
import { Customer, CustomerResponse } from 'app/models/customer';

export const GET_CUSTOMER = 'Get Customer';
export const GET_CUSTOMER_SUCCESS = 'Get Customer Success';
export const CREATE_CUSTOMER = 'Create Customer';
export const CREATE_CUSTOMER_SUCCESS = 'Create Customer Success';
export const CREATE_CUSTOMER_FAIL = 'Create Customer Fail';
export const CLOSE_DIALOG_SUCCESS = 'Close Dialog Success';
export const CHANGE_ROUTE = '[Customer] Change Route';
export const RESET_ROUTE = '[Customer] Reset Route';

export class GetCustomer implements Action {
  readonly type = GET_CUSTOMER;
  constructor(public payload: any) {}
}

export class GetCustomerSuccess implements Action {
  readonly type = GET_CUSTOMER_SUCCESS;
  constructor() {}
}

export class CreateCustomer implements Action {
  readonly type = CREATE_CUSTOMER;
  constructor(public payload: Customer) {}
}

export class CreateCustomerSuccess implements Action {
  readonly type = CREATE_CUSTOMER_SUCCESS;
  constructor(public payload: CustomerResponse) {}
}

export class CreateCustomerFail implements Action {
  readonly type = CREATE_CUSTOMER_FAIL;
  constructor(public payload: any) {}
}

export class CloseDialogSuccess implements Action {
  readonly type = CLOSE_DIALOG_SUCCESS;
}

export class ChangeRoute implements Action {
  readonly type = CHANGE_ROUTE;
  constructor(public payload: number) {}
}

export class ResetRoute implements Action {
  readonly type = RESET_ROUTE;
}

export type All
  = GetCustomer
  | GetCustomerSuccess
  | CreateCustomer
  | CreateCustomerSuccess
  | CreateCustomerFail
  | CloseDialogSuccess
  | ChangeRoute
  | ResetRoute;