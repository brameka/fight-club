import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import * as actions from './client.actions';
import * as app from 'app/state/notification/notification.actions';
import { ClientService } from '../../services/client.service';
import { Client } from 'app/models/client';

export type Action = actions.All;

@Injectable()
export class ClientEffects {

  constructor(private actions$: Actions,
    private store$: Store<Object>,
    private service: ClientService,
    private router: Router,
    private slimService: SlimLoadingBarService
  ) {}

  @Effect()
  getClients$: Observable<Action> = this.actions$.ofType(actions.GET_CLIENTS)
    .switchMap((payload) => this.service.getClients(payload)
      .mergeMap(contacts => [
        new actions.GetClientsSuccess(contacts)
      ])
      .delay(2000)
      .do(x => {
        this.slimService.complete();
      })
    );

  @Effect()
    getClient$: Observable<Action> = this.actions$.ofType(actions.GET_CLIENT)
      .switchMap((action: any) => this.service.getClient(action.payload.id)
        .mergeMap(client => [
          new actions.GetClientSuccess(client)
        ])
        .delay(1000)
        .do(x => {
          this.slimService.complete();
        })
      );

    @Effect()
    createClient$: Observable<Action> = this.actions$.ofType(actions.CREATE_CLIENT)
      .switchMap((action: any) => this.service.createClient(action.payload)
        .mergeMap(response => [
          new actions.CreateClientSuccess(response),
          new app.ShowNotification({ message: 'Alright! The client has been created', type: 'success' })
        ])
        .do((success: actions.CreateClientSuccess) => {
          if (success.type === actions.CREATE_CLIENT_SUCCESS) {
            this.router.navigate(['../app/clients/' + success.payload.id]);
          }
        })
        .catch(error => {
          console.log('failed: ', error);
          return Observable.of(new actions.CreateClientFail(error));
        })
    );
}
