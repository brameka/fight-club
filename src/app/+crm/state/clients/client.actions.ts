import { Action } from '@ngrx/store';
import { Client } from 'app/models/client';
import { Observable } from 'rxjs/Observable';

export const GET_CLIENTS = '[Client] Get Clients';
export const GET_CLIENTS_SUCCESS = '[Client] Get Clients Success';
export const GET_CLIENTS_FAIL = '[Client] Get Clients Fail';

export const GET_CLIENT = '[Client] Get Client';
export const GET_CLIENT_SUCCESS = '[Client] Get Client Success';

export const CREATE_CLIENT = '[Client] Create Client';
export const CREATE_CLIENT_SUCCESS = '[Client] Create Client Success';
export const CREATE_CLIENT_FAIL = '[Client] Create Client Fail';

export class GetClients implements Action {
  readonly type = GET_CLIENTS;
  constructor(public payload: any) {}
}

export class GetClientsSuccess implements Action {
  readonly type = GET_CLIENTS_SUCCESS;
  constructor(public payload: Client[]) {}
}

export class GetClient implements Action {
  readonly type = GET_CLIENT;
  constructor(public payload: { id: string }) {}
}

export class GetClientSuccess implements Action {
  readonly type = GET_CLIENT_SUCCESS;
  constructor(public payload: Client) {}
}

export class CreateClient implements Action {
  readonly type = CREATE_CLIENT;
  constructor(public payload: Client) {}
}

export class CreateClientSuccess implements Action {
  readonly type = CREATE_CLIENT_SUCCESS;
  constructor(public payload: any) {}
}

export class CreateClientFail implements Action {
  readonly type = CREATE_CLIENT_FAIL;
  constructor(public payload: any) {}
}

export type All
  = GetClients
  | GetClientsSuccess
  | GetClient
  | GetClientSuccess
  | CreateClient
  | CreateClientSuccess;
