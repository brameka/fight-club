import { Component } from '@angular/core';
import { SnackType } from '../../models/notification';

@Component({
  selector: 'app-notification',
  template: `
  <mat-icon *ngIf="isSuccess" matSuffix class="app-snackbar-notification__icon app-snackbar-notification__icon--success">
    done
  </mat-icon>
  <mat-icon *ngIf="isWarning" matSuffix class="app-snackbar-notification__icon app-snackbar-notification__icon--warning">warning</mat-icon>
  <mat-icon *ngIf="isError" matSuffix class="app-snackbar-notification__icon app-snackbar-notification__icon--error">error</mat-icon>
  {{ message }}`
})
export class SnackbarNotificationComponent {
  message: string;
  icon: string;
  type: SnackType = SnackType.success;

  get isSuccess (): boolean {
    return this.type === SnackType.success;
  }

  get isError (): boolean {
    return this.type === SnackType.error;
  }

  get isWarning (): boolean {
    return this.type === SnackType.warning;
  }
}
