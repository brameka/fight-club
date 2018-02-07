import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NotificationEffects } from './notification/notification.effects';
import { notificationReducer } from './notification/notification.reducer';

import { AppEffects } from './app/app.effects';
import { appReducer } from './app/app.reducer';

import { UsersEffects } from './users/users.effects';
import { usersReducer } from './users/users.reducer';

const effects = [
  AppEffects,
  NotificationEffects,
  UsersEffects
];

@NgModule({
  imports: [
    EffectsModule.forRoot([...effects]),
    StoreModule.forRoot({
      app: appReducer,
      notification: notificationReducer,
      users: usersReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ]
})
export class StateModule {}
