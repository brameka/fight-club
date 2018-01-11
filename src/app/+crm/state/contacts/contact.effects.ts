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

import * as contactActions from './contact.actions';
import * as notificationActions from 'app/state/notification/notification.actions';

import { ContactService } from '../../services/contact.service';
import { Contact } from 'app/models/contact';

export type Action = contactActions.All;

@Injectable()
export class ContactEffects {

  constructor(private actions$: Actions,
    private store$: Store<Object>,
    private service: ContactService,
    private router: Router,
    private slimService: SlimLoadingBarService
  ) {}

  @Effect()
  getContacts$: Observable<Action> = this.actions$.ofType(contactActions.GET_CONTACTS)
    .switchMap((payload) => this.service.getContacts(payload)
      .mergeMap(contacts => [
        new contactActions.GetContactsSuccess(contacts)
      ])
      .delay(2000)
      .do(x => {
        this.slimService.complete();
      })
    );
}
