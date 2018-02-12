import * as actions from './app.actions';

export interface AppState {
  styles: any;
  state: string;
  subState: string;
  active: string;
  menuColour: string;
  loadingColour: string;
  title: string;
}

export const primaryState: AppState = {
  styles: {'margin-top': '64px'},
  state: 'home',
  subState: 'default',
  active: 'home',
  menuColour: 'primary',
  loadingColour: '#fff',
  title: 'Home'
};

export const initialState: AppState = {
  styles: {'margin-top': '64px'},
  state: 'home',
  subState: 'default',
  active: 'home',
  menuColour: 'default',
  loadingColour: '#3f51b5',
  title: 'Home'
};

export type Action = actions.All;

export function appReducer(state: AppState = primaryState, action: Action): AppState {
  switch (action.type) {

    // case actions.SHOW_HOME_STATE:
    //   return { ...state,
    //     title: 'Home',
    //     styles: { 'margin-top': '64px' },
    //     state: 'home',
    //     subState: 'default',
    //     menuColour: 'default',
    //     loadingColour: '#3f51b5'
    //   };
    // case actions.SHOW_CONTACT_STATE:
    //   return {
    //     ...state,
    //     title: 'Contact',
    //     styles: { 'margin-top': '110px' },
    //     state: 'contact',
    //     subState: 'default',
    //     menuColour: 'primary',
    //     loadingColour: '#fff'
    //   };

    case actions.SHOW_STATE:
      console.log(action.payload);
      return {
        ...state,
        state: action.payload.state,
        title: action.payload.title
      };

    default:
      return state;
  }

}
