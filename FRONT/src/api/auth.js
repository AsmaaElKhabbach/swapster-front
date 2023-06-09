// == Import
import axios from 'axios';
import {
  setError, setIsLoading, saveUser, signUpRequest, signUpFailed, signUpSuccess, saveNewUserInfo,
} from '../store/reducers/settings';
import { axiosInstance } from './axiosInstance';

// == Middlewares

// Fonction pour la connexion
export const login = (email, password, callback) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    // appel api à l'application back pour se logger
    const response = await axiosInstance.post('user/login', {
      email,
      password,
    });
    console.log(response.data);
    // mise en place du token pour la connexion
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    dispatch(setIsLoading(false));
    // enregistrement des données de l'utilisateur dans le state reducer settings
    dispatch(saveUser(response.data));
    // fonction de callback pour rediriger l'utilisateur vers la page d'accueil
    callback();
  }
  catch (axios) {
    console.log(axios);
    // on récupère l'erreur dans axios
    dispatch(setError(axios.response.data));
    alert('Email ou mot de passe incorrect');
  }
};

// Fonction pour s'inscrire
export const signUp = (userData) => async (dispatch) => {
  // modification de l'action de requête pour s'inscrire
  dispatch(signUpRequest());
  try {
    //  appel api à l'application back pour s'inscrire
    const response = await axiosInstance.post('user/signup', userData);
    // modification de l'action de succès pour s'inscrire
    dispatch(signUpSuccess(response.data));
  }
  catch (error) {
    // modification de l'action d'erreur pour s'inscrire
    dispatch(signUpFailed(error.message));
     alert('L\'inscription a échouée merci de retenter votre inscription');
  }
};

// Fonction pour supprimer son compte
export const deleteUserAccount = () => async (getState) => {
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
  catch (axios) {
    dispatch(setError(axios.response.data));
    alert('Malheureusement votre compte n\'a pu être supprimer.')
  }
};

// Fonction pour modifier son compte

export const changeUserData = () => async (dispatch, getState) => {
  try {
    const state = getState();

    //  appel api à l'application back pour modifier les informations de l'utilisateur
    const response = await axiosInstance.patch('/user/me', {
      name: state.settings.user.data.name,
      email: state.settings.user.data.email,
      city: state.settings.user.data.city,
      password: state.settings.user.data.password,
      passwordConfirm: state.settings.user.data.passwordConfirm,
    });
    console.log(response.data);
    // faire un dispatch avec un createAction
    dispatch(saveNewUserInfo(response.data));
  }
  catch (axios) {
    dispatch(setError(axios.response.data));
    console.log(axios.response.data)
    alert('La modification a échouée.')
  }
};
