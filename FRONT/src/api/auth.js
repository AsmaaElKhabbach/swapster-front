// == Import
import axios from 'axios';
import {
<<<<<<< HEAD
  setError, setIsLoading, saveUser, signUpRequest, signUpFailed, signUpSuccess, modifyAccount,
=======
<<<<<<< HEAD
  setError, setIsLoading, saveUser, signUpRequest, signUpFailed, signUpSuccess, modifyAccount,
=======
  setError, setIsLoading, saveUser, signUpRequest, signUpFailed, signUpSuccess, saveNewUserInfo,
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
>>>>>>> 8056f35e3d3766b87740a588ea098c6c86c643b2
} from '../store/reducers/settings';
import { axiosInstance } from './axiosInstance';

// == Middlewares

// Fonction pour la connexion
export const login = (email, password, callback) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    // appel api à l'application back pour se logger
<<<<<<< HEAD
    const response = await axiosInstance.post('/user/login', {
=======
    const response = await axiosInstance.post('user/login', {
>>>>>>> 8056f35e3d3766b87740a588ea098c6c86c643b2
      email,
      password,
    });
    console.log(response.data);
    // mise en place du token pour la connexion
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    dispatch(setIsLoading(false));
    // ajout du stockage du token
    // localStorage.setItem('token', response.data.token);
    // localStorage.setItem('userId', response.data.id);
    dispatch(saveUser({
      logged: true,
      token: response.data.token,
      pseudo: response.data.pseudo,
    }));
    console.log(response);

    // enregistrement des données de l'utilisateur dans le state reducer settings
    dispatch(saveUser(response.data));
    // fonction de callback pour rediriger l'utilisateur vers la page d'accueil
    callback();
  }
  catch (axios) {
    console.log(axios);
    // on récupère l'erreur dans axios
    dispatch(setError(axios.response.data));
    alert('error');
  }
};

// Fonction pour s'inscrire
<<<<<<< HEAD
<<<<<<<< HEAD:FRONT/src/api/auth.js
=======
>>>>>>> 8056f35e3d3766b87740a588ea098c6c86c643b2
export const signUp = (userData) => async (dispatch) => {
  // modification de l'action de requête pour s'inscrire
  dispatch(signUpRequest());
  try {
    //  appel api à l'application back pour s'inscrire
<<<<<<< HEAD
    const response = await axiosInstance.post('/user/signup', userData);
=======
    const response = await axiosInstance.post('user/signup', userData);
>>>>>>> 8056f35e3d3766b87740a588ea098c6c86c643b2
    // modification de l'action de succès pour s'inscrire
    dispatch(signUpSuccess(response.data));
  }
  catch (error) {
    // modification de l'action d'erreur pour s'inscrire
    dispatch(signUpFailed(error.message));
  }
<<<<<<< HEAD
========
export const signUp = (userData) => {
  return async (dispatch) => {
    // modification de l'action de requête pour s'inscrire
    dispatch(signUpRequest());
    try {
      //  appel api à l'application back pour s'inscrire
      const response = await axiosInstance.post("/signup", userData);
      // modification de l'action de succès pour s'inscrire
      dispatch(signUpSuccess (response.data));

    } catch (error) {
      // modification de l'action d'erreur pour s'inscrire
      dispatch(signUpFailed(error.message));
    }
  };
>>>>>>>> 8056f35e3d3766b87740a588ea098c6c86c643b2:src/api/auth.js
};




=======
};

// Fonction pour supprimer son compte

export const deleteUserAccount = () => async (dispatch, getState) => {
  try {
    const state = getState();
    const { token } = state.settings.user.token;

    //  appel api à l'application back pour s'inscrire
    const response = await axiosInstance.delete('/user/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
  catch (error) {
    throw new Error(`Error deleting user account: ${error.message}`);
  }
};

// Fonction pour modifier son compte

<<<<<<< HEAD
export const modifyUserAccount = () => async (dispatch, getState) => {
  try {
    const state = getState();
    const { token } = state.settings.user.token;

    //  appel api à l'application back pour s'inscrire
    const response = await axiosInstance.patch('/user/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // faire un dispatch avec un createAction
    dispatch(modifyAccount(response.data));
=======
export const changeUserData = () => async (dispatch, getState) => {
  try {
    const state = getState();

    //  appel api à l'application back pour modifier les informations de l'utilisateur
    const response = await axiosInstance.patch('/user/me', {
      name: state.settings.user.data.name,
      city: state.settings.user.data.city,
      password: state.settings.user.data.password,
    });
    console.log(response.data);
    // faire un dispatch avec un createAction
    dispatch(saveNewUserInfo(response.data));
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
  }
  catch (error) {
    throw new Error(`Error deleting user account: ${error.message}`);
  }
};
>>>>>>> 8056f35e3d3766b87740a588ea098c6c86c643b2
