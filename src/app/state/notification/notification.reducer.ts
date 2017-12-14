import * as NotificationActions from './notification.actions';
import { Notification } from '../../models/notification';

export interface NotificationState {
  active: boolean;
}

export const initialState: NotificationState = {
  active: false
};

export type Action = NotificationActions.All;

export function notificationReducer(state: NotificationState = initialState, action: Action): NotificationState {
  switch (action.type) {
    case NotificationActions.SHOW_NOTIFICATION:
      return { ...state, active: true };
    default:
      return state;
  }
}
