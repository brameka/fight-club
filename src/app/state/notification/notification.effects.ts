import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import * as app from './notification.actions';
import { NotificationService } from '../../services/notification.service';

@Injectable()
export class NotificationEffects {

  constructor (
    private actions$: Actions,
    private notificationService: NotificationService
  ) { }

  @Effect()
  showNotification$: Observable<Action> = this.actions$
    .ofType(app.NOTIFY)
    .do((action: app.Notify) => {
      console.log('create notification');
      this.notificationService.openSnackBar(action.payload);
    });
}
