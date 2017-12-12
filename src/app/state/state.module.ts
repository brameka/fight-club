import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CustomerEffects } from './customer/customer.effects';
import { customerReducer } from './customer/customer.reducer';

const modules = [
  EffectsModule,
  StoreModule,
  StoreDevtoolsModule
];

@NgModule({
  imports: [
    EffectsModule.forRoot([CustomerEffects]),
    StoreModule.forRoot({
      customer: customerReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ]
})
export class StateModule {}
