

import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CustomerEffects } from './customer/customer.effects';
import { customerReducer } from './customer/customer.reducer';

const effects = [
  CustomerEffects,
];

@NgModule({
  imports: [
    EffectsModule.forFeature([...effects]),
    StoreModule.forFeature('customer', customerReducer)
  ]
})
export class CrmStateModule {}
