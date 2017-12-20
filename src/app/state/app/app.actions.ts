import { Action } from '@ngrx/store';

export const SHOW_HOME_STATE = 'Show Home State';
export const SHOW_CONTACT_STATE = 'Show Contact State';

export class ShowHomeState implements Action {
  readonly type = SHOW_HOME_STATE;
}

export class ShowContactState implements Action {
  readonly type = SHOW_CONTACT_STATE;
}

export type All
  = ShowHomeState
  | ShowContactState;
