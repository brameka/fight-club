import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import * as customerActions from './customer.actions';
import * as notificationActions from '../notification/notification.actions';

import { CustomerService } from '../../services/customer.service';

export type Action = customerActions.All;

@Injectable()
export class CustomerEffects {

  constructor(private actions$: Actions, private store$: Store<object>, private service: CustomerService) {}

  @Effect()
  getCustomer$: Observable<Action> = this.actions$.ofType(customerActions.GET_CUSTOMER)
    .map((action: customerActions.GetCustomer) => action.payload )
    .delay(2000) // delay to show spinner
    .mergeMap(id => [
      // return this.db.object(payload);
      console.log('get customer id: ', id)
    ])
    .map(customer => {
      console.log('get customer success');
      // post.pushKey = post.$key;
      return new customerActions.GetCustomerSuccess();
    });

  @Effect()
  createCustomer$: Observable<Action> = this.actions$.ofType(customerActions.CREATE_CUSTOMER)
    .switchMap((action: any) => this.service.createCustomer(action.payload)
      .mergeMap(res => [
        new notificationActions.ShowNotification({ message: 'New tag successfully created', type: 'success' }),
        new customerActions.CreateCustomerSuccess()
      ])
      .do((respAction: customerActions.CreateCustomerSuccess) => {
        console.log('navigate to new customer');
        // if (respAction.payload.id) {
        //   this.router.navigate(['/crm/users/' + respAction.payload.id + '/edit/']);
        // }
      })
      .catch(error => {
        console.log('failed: ', error);
        return Observable.of(new customerActions.CreateCustomerFail(error));
      })
  );



  // .map((action: customerActions.CreateCustomer) => action.payload )
  // .mergeMap(payload => [
  //   console.log('notify store'),
  //   this.store$.dispatch(new notificationActions.Notify({ message: 'New tag successfully created', type: 'success' })),
  //   console.log('create user')
  // ])
  // .map(() => new customerActions.CreateCustomerSuccess())
  // .catch(err => of (new customerActions.CreateCustomerFail({ error: err.message })) );

  // @Effect()
  // createCustomer$: Observable<Action> = this.actions$.ofType(customerActions.CREATE_CUSTOMER)
  //   .map((action: customerActions.CreateCustomer) => action.payload )
  //   .mergeMap(payload => of(this.db.object('posts/' + payload.post.pushKey)
  //                        .update({
  //                          votes: payload.post.votes + payload.val
  //                        })))
  //   .map(() => new postActions.VoteSuccess())
  //   .catch(err => of (new postActions.VoteFail( { error: err.message } )) );
}
