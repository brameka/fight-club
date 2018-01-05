import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import { LoanService } from '../../services/loan.service';
import * as actions from './loans.actions';
import * as notificationActions from '../notification/notification.actions';

export type Action = actions.All;

@Injectable()
export class LoansEffects {

  constructor(private actions$: Actions,
    private store$: Store<Object>,
    private service: LoanService,
    private slimService: SlimLoadingBarService
  ) {}

  @Effect()
  getLoans$: Observable<Action> = this.actions$.ofType(actions.GET_LOANS)
    .switchMap((payload) => this.service.getLoans(payload)
      .mergeMap(loans => [
        new actions.GetLoansSuccess(loans)
      ])
      .delay(3000)
      .do(x => {
        this.slimService.complete();
      })
    );
}
