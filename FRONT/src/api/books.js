// == Import
import axios from 'axios';
import { axiosInstance } from './axiosInstance';
import {
  setError, saveBooksGivenByUsers, saveBooks, saveBooksToGivenBooksList, saveLatestBookAdded,
} from '../store/reducers/books';

// == Middlewares

// Fonction pour récupérer les livres rechercher
export const getBook = () => async (dispatch, getState) => {
  const state = getState();
  const search = state.books.userSearch;

  try {
    // appel api à l'application back pour récupérer les livres une fois une recherche effectuée
    const response = await axiosInstance.get(`/book/search?query=${search}`);
    console.log(response);
    // modification de l'action de succès pour s'inscrire
    dispatch(saveBooks(response.data));
  }
  catch (axios) {
    dispatch(setError(axios.response));
    alert('Aucun résultat pour cette recherche');
  }
};

// Fonction pour récupérer les livres donnés par les utilisateurs
export const getUsersGivenBooks = () => async (dispatch, getState) => {
  const state = getState();
  console.log(state);

  // on récupère l'id de chaque livre
  const bookId = state.books.search.searchResults.map((book) => (book.id));
  console.log(bookId);

  // pour chaque livre on effutue un appel api aux users qui donnnent le livre en question
  bookId.forEach(async (id) => {
    try {
      //  appel api à l'application back pour récupérer les livres une fois une recherche effectuée
      const response = await axiosInstance.get(`/book/${id}/allusers`);
      console.log(response.data);
      // modification de l'action de succès pour s'inscrire
      dispatch(saveBooksGivenByUsers(response.data));
    }
    catch (axios) {
      console.log(axios);
      // on récupère l'erreur dans axios
      dispatch(setError(axios.response.data));
      alert('error');
    }
  });
};

// Fonction pour récupérer les livres donnés par les utilisateurs dans la page d'accueil
export const getUsersGivenBooksHome = () => async (dispatch, getState) => {
  const state = getState();
  console.log(state);
  const bookId = state.books.latestBooksAdded.map((book) => (book.id));

  // pour chaque livre on effutue un appel api aux users qui donnnent le livre en question
  bookId.forEach(async (id) => {
    try {
      //  appel api à l'application back pour récupérer les livres une fois une recherche effectuée
      const response = await axiosInstance.get(`/book/${id}/allusers`);
      console.log(response.data);
      // modification de l'action de succès pour s'inscrire
      dispatch(saveBooksGivenByUsers(response.data));
    }
    catch (axios) {
      console.log(axios);
      // on récupère l'erreur dans axios
      dispatch(setError(axios.response.data));
      alert('error');
    }
  });
};

// Fonction qui permet à l'utilisateur connecter d'ajouter un livre a sa liste des livres à donner
export const addBookToList = (id, bookCondition) => async (dispatch, getState) => {
  const state = getState();
  console.log(state);

  try {
    const response = await axiosInstance.post(`/book/${id}/my`, {
      status: bookCondition,
    });

    dispatch(saveBooksToGivenBooksList(response.data));
  }
  catch (axios) {
    console.log(axios);
    // on récupère l'erreur dans axios
    dispatch(setError(axios.response.data));
    alert('error');
  }
};

// Fonction qui permet de récupérer les derniers livres ajoutés par les utilisateurs
export const getLatestBookAdded = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get('/book/latestadded');

    dispatch(saveLatestBookAdded(response.data));
    console.log(response.data);
  }
  catch (axios) {
    console.log(axios);
    // on récupère l'erreur dans axios
    dispatch(setError(axios.response.data));
    alert('Error retrieving latest books added');
    return [];
  }
};
