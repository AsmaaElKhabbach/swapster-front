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
// action qui permet de gérer la déconnexion de l'utilisateur
export const logout = createAction('settings/logout');

// Action concernant l'inscription
// action qui permet de gérer la requête d'une création de compte utilisateur
export const signUpRequest = createAction('settings/signUpRequest');
// action qui permet de gérer la création d'un compte utilisateur avec succès
export const signUpSuccess = createAction('settings/signUpSucess');
// action qui permet de gérer l'erreur lors de la création d'un compte utilisateur
export const signUpFailed = createAction('settings/signUpFailed');
<<<<<<< HEAD
// action qui permet de modifier le compte d'un utilisateur
export const modifyAccount = createAction('settings/modifyAccount');
=======
<<<<<<< HEAD
// action qui permet de modifier le compte d'un utilisateur
export const modifyAccount = createAction('settings/modifyAccount');
=======

// Action concernant la modfication des données du user
// action qui permet de modifier le compte d'un utilisateur
export const changeUserInfo = createAction('settings/changeUserInfo');
export const saveNewUserInfo = createAction('settings/saveNewUserInfo');
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
>>>>>>> 8056f35e3d3766b87740a588ea098c6c86c643b2

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
    })

<<<<<<< HEAD
    .addCase(modifyAccount, (state, payload) => {
      state.isLoggedIn = true;
      state.data = payload;
=======
<<<<<<< HEAD
    .addCase(modifyAccount, (state, payload) => {
      state.isLoggedIn = true;
      state.data = payload;
=======
    .addCase(changeUserInfo, (state, { payload }) => {
      const { value, name } = payload;
      state.isLoggedIn = true;
      state.user.data[name] = value;
    })

    .addCase(saveNewUserInfo, (state, { payload }) => {
      state.user.data = payload;
      state.isLoggedIn = true;
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
>>>>>>> 8056f35e3d3766b87740a588ea098c6c86c643b2
    });
});

// == Export
export default settingsReducer;
