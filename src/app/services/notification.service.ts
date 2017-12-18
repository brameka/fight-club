import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Rx';
import { Notification, SnackType, NotificationClasses } from '../models/notification';
import { SnackComponent } from '../ui/notifications/snack.component';

@Injectable()
export class NotificationService {

  constructor (public snackBar: MatSnackBar) {}

  private openSnackbarFromComponent (message: string, type: SnackType) {
    const duration = 3000;
    const notificationClass = this.getClass(type);
    const classes = [NotificationClasses.notification, notificationClass];
    const snackBarRef = this.snackBar.openFromComponent(SnackComponent, {
      duration,
      extraClasses: classes
    });
    snackBarRef.instance.message = message;
    snackBarRef.instance.type = type;
  }

  private openDefaultSnackbar (message: string, action?: string) {
    const duration = 3000;
    this.snackBar.open(message, action, {
      duration
    });
  }

  private getClass (type: SnackType): string {
    switch (type) {
      case SnackType.success:
        return NotificationClasses.success;
      case SnackType.error:
        return NotificationClasses.error;
      case SnackType.warning:
        return NotificationClasses.warning;
      default:
        return NotificationClasses.default;
    }
  }

  private getSnackType (type?: string): SnackType {
    if (type) {
      return SnackType[type];
    }
    return SnackType.default;
  }

  private isCustomNotificationType (type?: SnackType): boolean {
    return type === SnackType.success || type === SnackType.error || type === SnackType.warning;
  }

  openSnackBar ({ message, action, type }: Notification) {
    const snackType = this.getSnackType(type);
    if (this.isCustomNotificationType(snackType)) {
      this.openSnackbarFromComponent(message, snackType);
    } else {
      this.openDefaultSnackbar(message, action);
    }
  }
}
