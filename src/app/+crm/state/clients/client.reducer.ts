import { Observable } from 'rxjs/Observable';
import * as actions from './client.actions';
import { Client } from 'app/models/client';

export interface ClientState {
  clients: Client[];
  client: Client;
  loading: boolean;
  isCloseDialog: boolean;
  id: string;
}

export const initialState: ClientState = {
  id: '',
  loading: false,
  isCloseDialog: false,
  clients: [],
  client: {}
};

export type Action = actions.All;

export function clientReducer(state: ClientState = initialState, action: Action): ClientState {
  switch (action.type) {
    case actions.GET_CLIENTS:
      return { ...state, loading: true, isCloseDialog: false };
    case actions.GET_CLIENTS_SUCCESS:
      return { ...state, loading: false, isCloseDialog: false, clients: action.payload };
    case actions.GET_CLIENT_SUCCESS:
      return { ...state, loading: false, isCloseDialog: false, client: action.payload, id: action.payload.id };
    default:
      return state;
  }
}
