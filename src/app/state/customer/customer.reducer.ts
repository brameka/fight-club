import * as CustomerActions from './customer.actions';
import { Customer } from '../../models/customer';

export interface CustomerState {
  loading: boolean;
  isCloseDialog: boolean;
  id: number;

}

export const initialState: CustomerState = {
  id: 0,
  loading: false,
  isCloseDialog: false
};

export type Action = CustomerActions.All;

export function customerReducer(state: CustomerState = initialState, action: Action): CustomerState {
  switch (action.type) {
    case CustomerActions.GET_CUSTOMER:
      return { ...state, loading: true, isCloseDialog: false };
    case CustomerActions.GET_CUSTOMER_SUCCESS:
      return { ...state, loading: false, isCloseDialog: false  };
    case CustomerActions.CREATE_CUSTOMER_SUCCESS:
      return { ...state, loading: false, isCloseDialog: true };
    case CustomerActions.CLOSE_DIALOG_SUCCESS:
      return { ...state, isCloseDialog: false };

    default:
      return state;
  }
}
