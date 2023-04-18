// == Import
import axios from 'axios';
import {
  setError, setIsLoading, saveUser, signUpRequest, signUpFailed, signUpSuccess, deleteAccount,
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
export const signUp = (userData) => async (dispatch) => {
  // modification de l'action de requête pour s'inscrire
  dispatch(signUpRequest());
  try {
    //  appel api à l'application back pour s'inscrire
    const response = await axiosInstance.post('/signup', userData);
    // modification de l'action de succès pour s'inscrire
    dispatch(signUpSuccess(response.data));
  }
  catch (error) {
    // modification de l'action d'erreur pour s'inscrire
    dispatch(signUpFailed(error.message));
  }
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
    return response.data;
  }
  catch (error) {
    throw new Error(`Error deleting user account: ${error.message}`);
  }
};
