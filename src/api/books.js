// == Import
import axios from 'axios';
import { axiosInstance } from './axiosInstance';
import { setError, saveBooks } from '../store/reducers/books';
<<<<<<< HEAD
// == Middlewares

// Fonction pour récupérer les livres rechercher
export const getBook = () => async (dispatch) => {
  try {
    //  appel api à l'application back pour récupérer les livres une fois une recherche effectuée
    const response = await axiosInstance.post('/book/search');
    // modification de l'action de succès pour s'inscrire
    dispatch(saveBooks(response.data));
  }
  catch (axios) {
    console.log(axios);
    // on récupère l'erreur dans axios
    dispatch(setError(axios.response.data));
    alert('error');
  }
};
=======

// == Middlewares
>>>>>>> 89c2c46f3cfa7139a20e21841d809d932adeda21
