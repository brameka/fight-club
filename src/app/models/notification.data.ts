export interface NotificationsResponse {
  results: NotificationData[];
}

export interface NotificationData {
  title: string;
  message: string;
  action: string;
  priority: number;
}
