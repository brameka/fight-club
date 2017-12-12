import * as CustomerActions from './customer.actions';
import { Customer } from '../../models/customer';

export interface CustomerState {
  loading: boolean;
  id: number;
}

export const initialState: CustomerState = {
  id: 0,
  loading: false
};

export type Action = CustomerActions.All;

export function customerReducer(state: CustomerState = initialState, action: Action): CustomerState {
  switch (action.type) {
    case CustomerActions.GET_CUSTOMER:
      return { ...state, loading: true };
    case CustomerActions.GET_CUSTOMER_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
}
