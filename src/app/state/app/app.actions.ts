import { Action } from '@ngrx/store';

export const SHOW_HOME_STATE = 'Show Home State';
export const SHOW_CONTACT_STATE = 'Show Contact State';
export const SHOW_STATE = '[App] Show State';
export const CHANGE_INDEX = '[App] Change Index';

export class ShowHomeState implements Action {
  readonly type = SHOW_HOME_STATE;
}

export class ShowContactState implements Action {
  readonly type = SHOW_CONTACT_STATE;
}

export class ShowState implements Action {
  readonly type = SHOW_STATE;
  constructor(public payload: any) {}
}

export class ChangeIndex implements Action {
  readonly type = CHANGE_INDEX;
  constructor(public payload: any) {}
}

export type All
  = ShowHomeState
  | ShowContactState
  | ShowState
  | ChangeIndex;
