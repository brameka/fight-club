// import { Injectable } from '@angular/core';
// import { Effect, Actions } from '@ngrx/effects';
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/delay';

// import * as actions from './notification.actions';

// export type Action = actions.All;

// @Injectable()
// export class CustomerEffects {

//   constructor(private actions$: Actions) {}

//   @Effect()
//   getCustomer$: Observable<Action> = this.actions$.ofType(actions.NOTIFY)
//     .map((action: actions.Notify) => action.payload )
//     .delay(2000) // delay to show spinner
//     .mergeMap(id => [
//       // return this.db.object(payload);
//       console.log('get customer id: ', id)
//     ])
//     .map(customer => {
//       console.log('get customer success');
//       // post.pushKey = post.$key;
//       return new customerActions.GetCustomerSuccess();
//     });

//   @Effect()
//   createCustomer$: Observable<Action> = this.actions$.ofType(customerActions.CREATE_CUSTOMER)
//     .map((action: customerActions.CreateCustomer) => action.payload )
//     .mergeMap(payload => [
//       console.log('create user')
//     ])
//     .map(() => new customerActions.CreateCustomerSuccess())
//     .catch(err => of (new customerActions.CreateCustomerFail({ error: err.message })) );
// }
