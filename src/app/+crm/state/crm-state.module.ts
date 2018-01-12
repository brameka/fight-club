

import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ContactEffects } from './contacts/contact.effects';
import { contactReducer } from './contacts/contact.reducer';

import { CustomerEffects } from './customer/customer.effects';
import { customerReducer } from './customer/customer.reducer';

const effects = [
  CustomerEffects,
  ContactEffects
];

@NgModule({
  imports: [
    EffectsModule.forFeature([...effects]),
    StoreModule.forFeature('crm', {
      contacts: contactReducer,
      customers: customerReducer
    })
  ]
})
export class CrmStateModule {}
