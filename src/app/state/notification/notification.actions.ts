import { Action } from '@ngrx/store';
import { Notification } from '../../models/notification';

export const SHOW_NOTIFICATION = 'Show Notification';
export const SHOW_NOTIFICATION_SUCCESS = 'Show Notification Success';

export class ShowNotification implements Action {
  readonly type = SHOW_NOTIFICATION;
  constructor(public payload: Notification) {}
}

export class ShowNotificationSuccess implements Action {
  readonly type = SHOW_NOTIFICATION_SUCCESS;
}

export type All
  = ShowNotification
  | ShowNotificationSuccess;
