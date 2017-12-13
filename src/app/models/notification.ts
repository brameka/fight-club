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

enum Priority {
  High = 1,
  Medium = 2,
  Low = 3
}

export enum NotificationClasses {
  notification = 'app-snackbar-notification',
  default = 'app-snackbar-notification__block--default',
  success = 'app-snackbar-notification__block--success',
  error = 'app-snackbar-notification__block--error',
  warning = 'app-snackbar-notification__block--warning'
}
