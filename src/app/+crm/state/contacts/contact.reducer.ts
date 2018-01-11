import { Observable } from 'rxjs/Observable';
import * as contactActions from './contact.actions';
import { Contact } from 'app/models/contact';

export interface ContactState {
  contacts: Contact[];
  loading: boolean;
  isCloseDialog: boolean;
  id: number;
}

export const initialState: ContactState = {
  id: 0,
  loading: false,
  isCloseDialog: false,
  contacts: []
};

export type Action = contactActions.All;

export function contactReducer(state: ContactState = initialState, action: Action): ContactState {
  switch (action.type) {
    case contactActions.GET_CONTACTS:
      return { ...state, loading: true, isCloseDialog: false };
    case contactActions.GET_CONTACTS_SUCCESS:
      return { ...state, loading: false, isCloseDialog: false, contacts: action.payload };
    default:
      return state;
  }
}
