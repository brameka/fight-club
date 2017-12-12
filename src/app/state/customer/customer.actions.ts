import { Action } from '@ngrx/store';
import { Customer } from '../../models/customer';

export const GET_CUSTOMER = 'Get Customer';
export const GET_CUSTOMER_SUCCESS = 'Get Customer Success';
export const CREATE_CUSTOMER = 'Create Customer';
export const CREATE_CUSTOMER_SUCCESS = 'Create Customer Success';
export const CREATE_CUSTOMER_FAIL = 'Create Customer Fail';

export class GetCustomer implements Action {
  readonly type = GET_CUSTOMER;
  constructor(public payload: number) {}
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
  constructor() {}
}

export class CreateCustomerFail implements Action {
  readonly type = CREATE_CUSTOMER_FAIL;
  constructor(public payload: any) {}
}

export type All
  = GetCustomer
  | GetCustomerSuccess
  | CreateCustomer
  | CreateCustomerSuccess
  | CreateCustomerFail;
