import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import * as actions from './users.actions';


export interface LoanState {
  users: User[];
  loading: boolean;
  isCloseDialog: boolean;
  id: number;
}

export const initialState: LoanState = {
  id: 0,
  loading: false,
  isCloseDialog: false,
  users: []
};

export type Action = actions.All;

export function usersReducer(state: LoanState = initialState, action: Action): LoanState {
  switch (action.type) {
    case actions.GET_USERS:
      return { ...state, loading: true, isCloseDialog: false };
    case actions.GET_USERS_SUCCESS:
      return { ...state, loading: false, isCloseDialog: false, users: action.payload };
    default:
      return state;
  }
}
