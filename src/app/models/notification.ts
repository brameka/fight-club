export interface NotificationsResponse {
  results: NotificationData[];
}

export interface NotificationData {
  title: string;
  message: string;
  action: string;
  type: string;
  priority: number;
}

export interface Notification {
  message: string;
  action?: string;
  type?: string;
}

export enum SnackType {
  default,
  success,
  warning,
  error
}
