import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';

import { UserService } from '../../services/user.service';
import * as actions from './users.actions';



export type Action = actions.All;

@Injectable()
export class FinancialEffects {

  constructor(private actions$: Actions,
    private store$: Store<Object>,
    private service: UserService,
    private slimService: SlimLoadingBarService
  ) {}

  @Effect()
  getLoans$: Observable<Action> = this.actions$.ofType(actions.GET_USERS)
    .switchMap((payload) => this.service.getUsers(payload)
      .mergeMap(loans => [
        // new actions.GetUsersSuccess()
      ])
      .delay(3000)
      .do(x => {
        this.slimService.complete();
      })
    );
}
