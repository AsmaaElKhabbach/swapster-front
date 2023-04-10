//== Import
import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
user: {
  data: {}, // contient les données de l'utilisateur
  isLoading: false, // va valoir true qd les donénes sont entrain d'etre chargées
  error: null, // va valoir une erreur lorsqu'il y a une erreur 
},

isLoggedIn: false,


};

//== Action
export const saveUser = createAction('settings/saveUser');
export const setIsLoading = createAction('settings/setIsLoading');
export const setError = createAction('settings/setError');
export const logout = createAction('settings/logout');

export const signUpRequest = createAction('settings/signUpRequest');
export const signUpSuccess = createAction('settings/signUpSucess');
export const signUpFailed = createAction('settings/signUpFailed');

// == Reducer
const settingsReducer = createReducer(initialState, (builder) => {
  builder 
  .addCase(saveUser, (state, { payload }) => {
    state.user.data = payload;
    state.isLoggedIn = true;
  })

  .addCase(logout, (state) => {
    state.isLoggedIn = false;
  })

  .addCase(signUpRequest, (state) => {
    state.user.isLoading = true;
    state.user.error = null;
  })

  .addCase(signUpSuccess, (state, { payload }) => {
    state.user.isLoading = false;
    state.user.data = payload;
    statusbar.isLoggedIn = true;
  })

  .addCase(signUpFailed, (state, { payload }) => {
    state.user.isLoading = false;
    state.user.error = payload;
  })

});

// == Export
export default settingsReducer;
