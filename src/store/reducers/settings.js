//= = Import
import { createAction, createReducer } from '@reduxjs/toolkit';

// == State
const initialState = {
  user: {
    data: {}, // contient les données de l'utilisateur
    isLoading: false, // va valoir true qd les donénes sont entrain d'etre chargées
    error: null, // va valoir une erreur lorsqu'il y a une erreur
    token: null, // jeton qui permet la conew-xion durant un lapse de temps
  },
  // vaut true à la connexion permet de gérer les affichages d'utilisateur connecté
  isLoggedIn: false,

};

//= = Action
// Action concernant la connexion
// action qui permet de sauvegarder les données d'un utilisateur
export const saveUser = createAction('settings/saveUser');
// action qui permet de gérer le chargement des données venant de l'api
export const setIsLoading = createAction('settings/setIsLoading');
// action qui permet de gérer les erreurs de connexion
export const setError = createAction('settings/setError');
// action qui permet de gérer la déconnexion de l'utilisateur, la suppression de ses données dans l'initial state
export const logout = createAction('settings/logout');

// Action concernant l'inscription
// action qui permet de gérer la requête d'une création de compte utilisateur
export const signUpRequest = createAction('settings/signUpRequest');
// action qui permet de gérer la création d'un compte utilisateur avec succès
export const signUpSuccess = createAction('settings/signUpSucess');
// action qui permet de gérer l'erreur lors de la création d'un compte utilisateur
export const signUpFailed = createAction('settings/signUpFailed');

// == Reducer
const settingsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(saveUser, (state, { payload }) => {
      state.user.data = payload;
      state.isLoggedIn = true;
      state.user.token = payload;
    })

    .addCase(logout, (state) => {
      state.isLoggedIn = false;
      state.user.token = null;
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
    });
});

// == Export
export default settingsReducer;
