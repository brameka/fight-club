import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/forkJoin';

import { FinancialService } from '../../services/financial.service';
import * as actions from './financial.actions';



export type Action = actions.All;

@Injectable()
export class FinancialEffects {

  constructor(private actions$: Actions,
    private store$: Store<Object>,
    private service: FinancialService,
    private slimService: SlimLoadingBarService
  ) {}

  @Effect()
  getFinancials$: Observable<Action> = this.actions$.ofType(actions.GET_FINANCIALS)
    .switchMap((payload) => Observable.forkJoin([
        this.service.getAssets(payload),
        this.service.getExpenses(payload)
      ]).map((data: any[]) => {
        const assets: any[] = data[0];
        const liabilities: any[] = data[1];
        const results = {
          assets: assets,
          liabilities: liabilities
        };
        return new actions.GetFinancialsSuccess(results);
      })
      .delay(1000)
      .do(() => {
        this.slimService.complete();
      })
    );
}
