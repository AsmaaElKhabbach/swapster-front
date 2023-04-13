// == Import
import axios from 'axios'
import { axiosInstance } from './axiosInstance';
// == Middlewares

// Fonction pour récupérer les livres rechercher 
export const getBook = () => async (dispatch, getState) => {
  try {
       //  appel api à l'application back pour récupérer les livres une fois une recherche effectuée
       const { data } = await axiosInstance.get('/books/search')
       console.log(data)
  }  catch (axios) {
    console.log(axios);
    // on récupère l'erreur dans axios
    dispatch(setError(axios.response.data))
    alert('error')
  } 
};
