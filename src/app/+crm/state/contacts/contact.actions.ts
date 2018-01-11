import { Action } from '@ngrx/store';
import { Contact } from 'app/models/contact';
import { Observable } from 'rxjs/Observable';

export const GET_CONTACTS = '[Contact] Get Contacts';
export const GET_CONTACTS_SUCCESS = '[Contact] Get Contacts Success';

export class GetContacts implements Action {
  readonly type = GET_CONTACTS;
  constructor(public payload: any) {}
}

export class GetContactsSuccess implements Action {
  readonly type = GET_CONTACTS_SUCCESS;
  constructor(public payload: Contact[]) {}
}

export type All
  = GetContacts
  | GetContactsSuccess;
