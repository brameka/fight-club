import { Observable } from 'rxjs/Observable';
import { Loan } from '../../models/loan';
import * as actions from './loans.actions';


export interface LoanState {
  loans: Loan[];
  loading: boolean;
  isCloseDialog: boolean;
  id: number;
}

export const initialState: LoanState = {
  id: 0,
  loading: false,
  isCloseDialog: false,
  loans: []
};

export type Action = actions.All;

export function loansReducer(state: LoanState = initialState, action: Action): LoanState {
  switch (action.type) {
    case actions.GET_LOANS:
      return { ...state, loading: true, isCloseDialog: false };
    case actions.GET_LOANS_SUCCESS:
      return { ...state, loading: false, isCloseDialog: false, loans: action.payload };
    default:
      return state;
  }
}
