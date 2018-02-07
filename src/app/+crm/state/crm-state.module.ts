

import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ClientEffects } from './clients/client.effects';
import { clientReducer } from './clients/client.reducer';

const effects = [
  ClientEffects
];

@NgModule({
  imports: [
    EffectsModule.forFeature([...effects]),
    StoreModule.forFeature('crm', {
      clients: clientReducer
    })
  ]
})
export class CrmStateModule {}
