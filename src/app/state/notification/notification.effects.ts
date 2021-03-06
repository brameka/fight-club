import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import * as actions from './notification.actions';
import { NotificationService } from '../../services/notification.service';

@Injectable()
export class NotificationEffects {

  constructor (
    private actions$: Actions,
    private notificationService: NotificationService,
  ) { }

  // @Effect()
  // showNotification$: Observable<Action> = this.actions$.ofType(actions.SHOW_NOTIFICATION)
  //   .switchMap((action: any) => this.customerService.createCustomer(action.payload)
  //     .map(res => {
  //       console.log('show notification effect');
  //       return new actions.ShowNotificationSuccess();
  //     })
  // );

  @Effect({ dispatch: false })
  showNotification$: Observable<Action> = this.actions$
    .ofType(actions.SHOW_NOTIFICATION)
    .do((action: actions.ShowNotification) => {
        return this.notificationService.openSnackBar(action.payload);
        // return new actions.ShowNotificationSuccess();
      });

  // @Effect()
  // showNotification$: Observable<Action> = this.actions$
  //   .ofType(actions.NOTIFY)
  //   .do((action: actions.Notify) => {
  //     console.log('create notification');
  //     this.notificationService.openSnackBar(action.payload);
  //   });

  // @Effect()
  // showNotification$: Observable<Action> = this.actions$.ofType(actions.SHOW_NOTIFICATION)
  //   .map((x) => {
  //     console.log('notification effect');
  //     return x;
  //   });
}
