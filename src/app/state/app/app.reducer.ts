import * as actions from './app.actions';

export interface AppState {
  styles: any;
  state: string;
  active: string;
  menuColour: string;
  loadingColour: string;
  title: string;
}

export const initialState: AppState = {
  styles: {'margin-top': '64px'},
  state: 'home',
  active: 'home',
  menuColour: 'default',
  loadingColour: '#3f51b5',
  title: 'Home'
};

export type Action = actions.All;

export function appReducer(state: AppState = initialState, action: Action): AppState {

  switch (action.type) {
    case actions.SHOW_HOME_STATE:
      return { ...state, 
        title: 'Home',
        styles: { 'margin-top': '64px' }, 
        state: 'home', 
        menuColour: 'default', 
        loadingColour: '#3f51b5' 
      };
    case actions.SHOW_CONTACT_STATE:
      return { 
        ...state, 
        title: 'Contact',
        styles: { 'margin-top': '110px' }, 
        state: 'contact', 
        menuColour: 'primary', 
        loadingColour: '#fff'  
      };

    default:
      return state;
  }

}
