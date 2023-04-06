//== Import
import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
user: {
  data: {}, // contient les données de l'utilisateur
  isLoading: false, // va valoir true qd les donénes sont entrain d'etre chargées
  error: null, // va valoir une erreur lorsqu'il y a une erreur 
  logged: true,
},

isLoggedIn: false,

};

//== Action
export const saveUser = createAction('settings/saveUser');
export const setIsLoading = createAction('settings/setIsLoading');
export const setError = createAction('settings/setError');
export const logout = createAction('settings/logout');
// == Reducer
const settingsReducer = createReducer(initialState, (builder) => {
  builder 
  .addCase(saveUser, (state, { payload }) => {
    state.user.data = payload;
    const {logged} = payload;
    state.isLoggedIn = logged;
  })

  .addCase(logout, (state) => {
    state.isLoggedIn = false;
  });

});

// == Export
export default settingsReducer;
