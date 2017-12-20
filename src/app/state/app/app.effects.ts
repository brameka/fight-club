import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import * as actions from './app.actions';

export type Action = actions.All;

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}
}
