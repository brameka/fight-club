import { Action } from '@ngrx/store';
import { Notification } from '../../models/notification';

export const NOTIFY = 'Notify';

export const NotificationSmall = 'Notification';

export class Notify implements Action {
  readonly type = NOTIFY;
  constructor(public payload: Notification) {}
}

export type All
  = Notify;
