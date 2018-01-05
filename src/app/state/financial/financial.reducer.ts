import { Observable } from 'rxjs/Observable';
import { Asset, Liability, Income, Expense } from '../../models/financial';
import * as actions from './financial.actions';


export interface InsuranceState {
  assets: Asset[];
  liabilities: Liability[];
  loading: boolean;
  isCloseDialog: boolean;
  id: number;
}

export const initialState: InsuranceState = {
  id: 0,
  loading: false,
  isCloseDialog: false,
  assets: [],
  liabilities: []
};

export type Action = actions.All;

export function financialReducer(state: InsuranceState = initialState, action: Action): InsuranceState {
  switch (action.type) {
    case actions.GET_FINANCIALS:
      return { ...state, loading: true, isCloseDialog: false };
    case actions.GET_FINANCIALS_SUCCESS: {
      console.log('Financial Success In Reducer: ', action.payload);
      return { ...state, loading: false, isCloseDialog: false, assets: action.payload.assets, liabilities: action.payload.liabilities };
    }
    default:
      return state;
  }
}
