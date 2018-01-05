import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';

import { InsuranceService } from '../../services/insurance.service';
import * as actions from './insurance.actions';



export type Action = actions.All;

@Injectable()
export class InsuranceEffects {

  constructor(private actions$: Actions,
    private store$: Store<Object>,
    private service: InsuranceService,
    private slimService: SlimLoadingBarService
  ) {}

  @Effect()
  getLoans$: Observable<Action> = this.actions$.ofType(actions.GET_INSURANCES)
    .switchMap((payload) => this.service.getInsurances(payload)
      .mergeMap(data => [
        new actions.GetInsurancesSuccess(data)
      ])
      .delay(5000)
      .do(x => {
        this.slimService.complete();
      })
    );
}
