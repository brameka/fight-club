import * as actions from './app.actions';

export interface AppState {
  state: string;
  active: string;
  menuColour: string;
  loadingColour: string;
}

export const initialState: AppState = {
  state: 'home',
  active: 'home',
  menuColour: 'default',
  loadingColour: '#3f51b5'
};

export type Action = actions.All;

export function appReducer(state: AppState = initialState, action: Action): AppState {

  switch (action.type) {
    case actions.SHOW_HOME_STATE:
      return { ...state, state: 'home', menuColour: 'default', loadingColour: '#3f51b5' };
    case actions.SHOW_CONTACT_STATE:
      return { ...state, state: 'contact', menuColour: 'primary', loadingColour: '#fff'  };

    default:
      return state;
  }

}
