// == Import
import axios from 'axios';
import { axiosInstance } from './axiosInstance';
import { setError, saveMyBooks } from '../store/reducers/books';
// == Middlewares

// Fonction pour récupérer les livres rechercher
export const getMyBook = () => async (dispatch) => {
  try {
    //  appel api à l'application back pour récupérer les livres une fois une recherche effectuée
    const response = await axiosInstance.get('/book/my');
    // modification de l'action de succès pour s'inscrire
    dispatch(saveMyBooks(response.data));
  }
  catch (axios) {
    console.log(axios);
    // on récupère l'erreur dans axios
    dispatch(setError(axios.response.data));
    alert('error');
  }
};
