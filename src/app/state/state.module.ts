import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CustomerEffects } from './customer/customer.effects';
import { customerReducer } from './customer/customer.reducer';

import { NotificationEffects } from './notification/notification.effects';
import { notificationReducer } from './notification/notification.reducer';

import { AppEffects } from './app/app.effects';
import { appReducer } from './app/app.reducer';

import { ContactEffects } from './contacts/contact.effects';
import { contactReducer } from './contacts/contact.reducer';

import { LoansEffects } from './loans/loans.effects';
import { loansReducer } from './loans/loans.reducer';

import { InsuranceEffects } from './insurance/insurance.effects';
import { insuranceReducer } from './insurance/insurance.reducer';

const effects = [
  AppEffects,
  CustomerEffects,
  NotificationEffects,
  ContactEffects,
  LoansEffects,
  InsuranceEffects
];

@NgModule({
  imports: [
    EffectsModule.forRoot([...effects]),
    StoreModule.forRoot({
      app: appReducer,
      customer: customerReducer,
      notification: notificationReducer,
      contact: contactReducer,
      loans: loansReducer,
      insurance: insuranceReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ]
})
export class StateModule {}
