import { Observable } from 'rxjs/Observable';
import { Insurance } from '../../models/insurance';
import * as actions from './insurance.actions';


export interface InsuranceState {
  data: Insurance[];
  loading: boolean;
  isCloseDialog: boolean;
  id: number;
}

export const initialState: InsuranceState = {
  id: 0,
  loading: false,
  isCloseDialog: false,
  data: []
};

export type Action = actions.All;

export function insuranceReducer(state: InsuranceState = initialState, action: Action): InsuranceState {
  switch (action.type) {
    case actions.GET_INSURANCES:
      return { ...state, loading: true, isCloseDialog: false };
    case actions.GET_INSURANCES_SUCCESS:
      return { ...state, loading: false, isCloseDialog: false, data: action.payload };
    default:
      return state;
  }
}
