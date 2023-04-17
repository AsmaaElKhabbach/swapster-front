// == Import
import axios from 'axios';
import { axiosInstance } from './axiosInstance';
import { setError, saveBooksGivenByUsers } from '../store/reducers/books';
// == Middlewares

// Fonction pour récupérer les livres donnés par les utilisateurs 

export const getUsersGivenBooks = () => async (dispatch, getState) => {
const state = getState();
console.log(state)
  try {

    const bookId = state.books.search.searchResults.map((id) => ({id}));
    //  appel api à l'application back pour récupérer les livres une fois une recherche effectuée
    const response = await axiosInstance.get(`/book/${bookId}/allusers`);
    // modification de l'action de succès pour s'inscrire
    dispatch(saveBooksGivenByUsers(response.data));
  }
  catch (axios) {
    console.log(axios);
    // on récupère l'erreur dans axios
    dispatch(setError(axios.response.data));
    alert('error');
  }
};

///book/:bookId/allusers 
