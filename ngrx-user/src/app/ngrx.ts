import { Action, createAction, props, createReducer, on } from '@ngrx/store';

enum ActionTypes {
  Login = 'Login',
  Logout = 'Logout',
}

export const login = createAction(ActionTypes.Login);

export const logout = createAction(ActionTypes.Logout);

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('nameThisAnimeUser')),
};

export const reducer = createReducer(
  INITIAL_STATE,
  on(login, (state) => ({
    ...state,
    user: JSON.parse(localStorage.getItem('nameThisAnimeUser')),
  })),
  on(logout, (state) => ({
    ...state,
    user: null,
  }))
);
