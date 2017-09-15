import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { NotificationData } from '../../models/notification.data';


@Component({
  selector: 'app-notifications',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnChanges, OnDestroy, OnInit {
  @Input() notifications: NotificationData[];
  @Output() update = new EventEmitter();
  badgeCount = 0;
  notificationsOpen = false;
  subscription: Subscription;

  constructor (private router: Router) {
    this.notifications = [
      {
        title: 'Notification',
        message: 'This is a message',
        action: 'This is a action',
        priority: 1
      },
      {
        title: 'Notification',
        message: 'This is a message',
        action: 'This is a action',
        priority: 1
      },
      {
        title: 'Notification',
        message: 'This is a message',
        action: 'This is a action',
        priority: 1
      }
    ];

    console.log(this.notifications);
  }

  ngOnInit () {
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

  ngOnChanges () {
    this.updateBadgeCount();
  }

  get hasNotifications () {
    return this.notifications && this.notifications.length > 0;
  }

  updateNotifications () {
    this.update.emit();
  }

  updateBadgeCount () {
    this.badgeCount = this.notifications ? this.notifications.length : 0;
  }

  toggleNotifications () {
    this.notificationsOpen = !this.notificationsOpen;
  }

  hideNotifications () {
    this.notificationsOpen = false;
  }

  // handleClick (notification: NotificationData) {
  //   this.navigate(new NotificationAction(notification));
  // }

  // navigate (notificationAction: NotificationAction) {
  //   this.router.navigate([notificationAction.route]);
  //   this.hideNotifications();
  // }
}
